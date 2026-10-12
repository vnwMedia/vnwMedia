# Homepage industry motion previews

Two separate homepage previews retain the current homepage composition:

- `home-hero-slideshow-preview.html`: the original eight industry photos, animated in the browser with slow zooms and eased 1.7-second crossfades. Photo layers are isolated below a fixed gradient with the left-side shading reduced by 50%; all photos decode before motion begins.
- `home-hero-video-preview.html`: a real silent H.264 MP4 with the same eight industries, slow zooms, and transitions.

Each loop lasts 48 seconds, advancing industries every six seconds. The video is 1280×720 at 24 fps and uses fast-start metadata for browser playback. It is a photo montage, not newly generated live-action footage. Both previews have pause controls and honor reduced-motion preferences. These pages are marked noindex; the main homepage is unchanged.

Both previews use the original `assets/industry-heroes/` set for Home Services, Healthcare, Automotive, Hospitality, Education, Legal, Real Estate, and Retail. The slideshow retains its revised fades and darker gradient.

Rebuild HTML and compressed photos with `python3 scripts/build-home-hero-motion.py`. Add `--slideshow-only` to update just the slideshow HTML. To also rebuild the MP4, pass `--ffmpeg` with the encoder's absolute path. The script needs Pillow and NumPy for video rendering.
