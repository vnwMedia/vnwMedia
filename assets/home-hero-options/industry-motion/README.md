# Homepage industry motion previews

Two separate homepage previews retain the current homepage composition:

- `home-hero-slideshow-preview.html`: eight compressed industry photos, animated in the browser with slow zooms and 1.5-second crossfades.
- `home-hero-video-preview.html`: a real silent H.264 MP4 with the same eight industries, slow zooms, and transitions.

Each loop lasts 48 seconds, advancing industries every six seconds. The video is 1280×720 at 24 fps and uses fast-start metadata for browser playback. It is a photo montage, not newly generated live-action footage. Both previews have pause controls and honor reduced-motion preferences. These pages are marked noindex; the main homepage is unchanged.

Sources: existing `assets/industry-heroes/` images for Home Services, Healthcare, Automotive, Hospitality, Education, Legal, Real Estate, and Retail.

Rebuild HTML and compressed photos with `python3 scripts/build-home-hero-motion.py`. To also rebuild the MP4, pass `--ffmpeg` with the encoder's absolute path. The script needs Pillow and NumPy for video rendering.
