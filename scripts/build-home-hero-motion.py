"""Build isolated homepage previews and render an industry-image video loop."""
from pathlib import Path
import argparse
import re
import subprocess
import sys
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SCENES = [
    ("Home Services & Contractors", "home-services"),
    ("Medical, Dental & Eye Care", "healthcare"),
    ("Automotive & Auto Body", "automotive"),
    ("Restaurants & Hospitality", "restaurants-hospitality"),
    ("Daycare & Education", "daycare-education"),
    ("Legal & Professional Services", "legal-professional-services"),
    ("Real Estate & Property", "real-estate"),
    ("Retail & eCommerce", "retail-ecommerce"),
]

def previews(slideshow_only=False):
    source = (ROOT / "index.html").read_text()
    source = re.sub(r'<link rel="stylesheet" href="home-hero-motion\.css[^\"]*">', '', source)
    source = re.sub(r'<script[^>]*src="home-hero-motion\.js[^\"]*"[^>]*></script>', '', source)
    source = source.replace(' data-motion-mode="slideshow"', '')
    source = re.sub(r'<div class="hero-bg motion-media".*?</div><div class="motion-shade".*?</div>(?:<button class="hero-motion-pause".*?</button>)?', '<div class="hero-bg" aria-hidden="true"></div>', source)
    source = re.sub(r'<link rel="stylesheet" href="site-buttons\.css[^\"]*">', '', source)
    source = re.sub(r'<script[^>]*src="site-buttons\.js[^\"]*"[^>]*></script>', '', source)
    asset_directory = ROOT / "assets/home-hero-options/industry-motion"
    asset_directory.mkdir(parents=True, exist_ok=True)
    for _, slug in SCENES:
        image = Image.open(ROOT / f"assets/industry-heroes/{slug}.png").convert("RGB")
        image.thumbnail((1600, 1000), Image.Resampling.LANCZOS)
        image.save(asset_directory / f"{slug}.webp", quality=82)
    for mode in (("slideshow",) if slideshow_only else ("slideshow", "video")):
        label = "Cinematic slideshow" if mode == "slideshow" else "Industry film loop"
        markup = '<div class="hero-bg motion-media" aria-hidden="true">'
        if mode == "slideshow":
            markup += ''.join(f'<img src="assets/home-hero-options/industry-motion/{slug}.webp" alt="" data-industry="{name}">' for name, slug in SCENES)
        else:
            markup += '<video autoplay muted loop playsinline preload="metadata" poster="assets/home-hero-options/industry-motion/home-services.webp"><source src="assets/home-hero-options/industry-motion/industry-film.mp4" type="video/mp4"></video>'
        markup += '</div><div class="motion-shade" aria-hidden="true"></div>'
        page = source.replace('<div class="hero-bg" aria-hidden="true"></div>', markup, 1)
        page = page.replace('<title>VNW Media | Web Design & Digital Marketing in New Jersey</title>', f'<title>{label} · Homepage Preview | VNW Media</title>')
        page = page.replace('</head>', '<meta name="robots" content="noindex,nofollow"><link rel="stylesheet" href="home-hero-motion.css?v=20261012-lighter-fade-v4"><link rel="stylesheet" href="site-buttons.css?v=20261004-mobile-email-send-label-v1"></head>')
        page = page.replace('<body', f'<body data-motion-mode="{mode}"', 1)
        toolbar = f'<aside class="motion-picker" aria-label="Hero design preview"><span>HOMEPAGE HERO · PREVIEW</span><a href="home-hero-slideshow-preview.html" aria-current="{"page" if mode == "slideshow" else "false"}">01 / Slideshow</a><a href="home-hero-video-preview.html" aria-current="{"page" if mode == "video" else "false"}">02 / Video</a><button id="motionPause" type="button" aria-pressed="false">Pause motion</button></aside>'
        page = page.replace('<main id="top">', toolbar + '<main id="top">', 1)
        page = page.replace('<div class="shell hero-grid">', '<div class="motion-caption"><span>' + label + '</span><strong id="motionIndustry">Home Services &amp; Contractors</strong></div><div class="shell hero-grid">', 1)
        page = page.replace('</body>', '<script src="home-hero-motion.js?v=20261012-lighter-fade-v4"></script><script src="site-buttons.js?v=20261004-mobile-business-field-v1"></script></body>')
        page = '\n'.join(line.rstrip() for line in page.splitlines()) + '\n'
        (ROOT / f"home-hero-{mode}-preview.html").write_text(page)

def render(ffmpeg):
    width, height, fps = 1280, 720, 24
    images = []
    for _, slug in SCENES:
        image = Image.open(ROOT / f"assets/industry-heroes/{slug}.png").convert("RGB")
        scale = max(width / image.width, height / image.height) * 1.14
        image = image.resize((round(image.width * scale), round(image.height * scale)), Image.Resampling.LANCZOS)
        images.append(image)
    output = ROOT / "assets/home-hero-options/industry-motion/industry-film.mp4"
    output.parent.mkdir(parents=True, exist_ok=True)
    command = [ffmpeg, "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{width}x{height}", "-r", str(fps), "-i", "-", "-an", "-c:v", "libx264", "-preset", "fast", "-crf", "23", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(output)]
    process = subprocess.Popen(command, stdin=subprocess.PIPE)
    def frame(index, progress):
        image = images[index % len(images)]
        zoom = 1 + .10 * min(progress / 7.5, 1)
        crop_width, crop_height = width / zoom, height / zoom
        x, y = (image.width - crop_width) / 2, (image.height - crop_height) / 2
        return np.asarray(image.crop((x, y, x + crop_width, y + crop_height)).resize((width, height), Image.Resampling.BILINEAR), dtype=np.float32)
    for number in range(48 * fps):
        time = number / fps
        index, progress = int(time // 6), time % 6
        current = frame(index, progress)
        if progress < 1.5:
            weight = progress / 1.5
            previous = frame(index - 1, progress + 6)
            current = previous * (1 - weight) + current * weight
        process.stdin.write(current.astype(np.uint8).tobytes())
    process.stdin.close()
    if process.wait() != 0:
        raise RuntimeError("Video encoder failed")
    print(f"Rendered {output.name}: 48 seconds, 8 industries, 1280×720")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--ffmpeg")
    parser.add_argument("--slideshow-only", action="store_true")
    args = parser.parse_args()
    previews(args.slideshow_only)
    if args.ffmpeg:
        render(args.ffmpeg)
