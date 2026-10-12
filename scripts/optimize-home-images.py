"""Generate smaller, visually equivalent homepage assets; retain original sources."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
sources = [
    'assets/home-team-circle-option-3.png',
    'assets/process-beige/strategize-wireframes.png',
    'assets/process-beige/create-kypcl.png',
    'assets/process-beige/improve-natural-team.png',
]
for name in sources:
    path = root / name
    with Image.open(path) as image:
        image.thumbnail((1400, 1400))
        image.save(path.with_suffix('.webp'), 'WEBP', quality=82, method=6)
        print(f'{name}: {path.stat().st_size} -> {path.with_suffix(".webp").stat().st_size} bytes')
motion = root / 'assets/home-hero-options/industry-motion'
for path in motion.glob('*.webp'):
    if path.stem.endswith(('-mobile', '-v2')):
        continue
    with Image.open(path) as image:
        image.thumbnail((960, 960))
        target = path.with_name(path.stem + '-mobile.webp')
        image.save(target, 'WEBP', quality=75, method=6)
        print(f'{target.name}: {target.stat().st_size} bytes')
