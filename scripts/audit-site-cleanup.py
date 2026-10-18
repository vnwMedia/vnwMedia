"""Read-only classification of tracked website pages and preview dependencies."""
from pathlib import Path
import json, re, subprocess
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {'Liquid Soldier', 'ai-intake-system-wordpress-upload', '.git'}
tracked = subprocess.check_output(['git', 'ls-files', '-z'], cwd=ROOT).decode().split('\0')
tracked = [name for name in tracked if name and (ROOT/name).is_file() and not EXCLUDED.intersection(Path(name).parts)]
pages = []
for name in tracked:
    if not name.endswith('.html'): continue
    source = (ROOT / name).read_text(errors='replace')
    soup = BeautifulSoup(source, 'html.parser')
    robots = soup.find('meta', attrs={'name':'robots'})
    redirect = soup.find('meta', attrs={'http-equiv':re.compile('refresh', re.I)})
    study_name = re.search(r'option|preview|variation|direction-\d|design-\d|process-chapters-expanded|fragment', name)
    if redirect: kind = 'redirect'
    elif name == 'thank-you.html': kind = 'utility'
    elif name.startswith('case-studies/') and name.endswith('-review.html'): kind = 'retire-review'
    elif study_name or name.startswith(('reports/', 'examples/')) or (robots and 'noindex' in robots.get('content', '')): kind = 'remove-study'
    else: kind = 'keep'
    pages.append({'path':name, 'kind':kind, 'title':soup.title.get_text() if soup.title else '', 'noindex':bool(robots and 'noindex' in robots.get('content',''))})

remove_pages = {p['path'] for p in pages if p['kind'] == 'remove-study'}
retire_reviews = {p['path'] for p in pages if p['kind'] == 'retire-review'}
kept_pages = {p['path'] for p in pages if p['kind'] not in {'remove-study', 'retire-review'}}
source_files = [n for n in tracked if Path(n).suffix in {'.html','.js','.css','.mjs','.svg'} and not n.startswith(('scripts/','tests/','reports/','examples/','assets/'))]
texts = {name:(ROOT/name).read_text(errors='replace') for name in source_files}
# Start with the retained pages, then follow JS/CSS and SVG dependencies. A bare
# basename is deliberately conservative for dynamically generated template paths.
runtime_files = [n for n in source_files if not n.endswith('.html')]
required = set(kept_pages)
queue = list(kept_pages)
while queue:
    source_name = queue.pop()
    source = texts.get(source_name, '')
    for candidate in runtime_files:
        if candidate not in required and (candidate in source or Path(candidate).name in source):
            required.add(candidate); queue.append(candidate)
exclusive_runtime = sorted(n for n in runtime_files if n not in required)
live_study_links = []
for source_name in required:
    source = texts.get(source_name,'')
    for target in remove_pages | retire_reviews:
        if target in source or (Path(source_name).parent == Path(target).parent and Path(target).name in source):
            live_study_links.append({'source':source_name,'target':target})
counts = {kind:sum(p['kind']==kind for p in pages) for kind in sorted({p['kind'] for p in pages})}
print(json.dumps({'counts':counts,'retained_pages':sorted(kept_pages),'remove_pages':sorted(remove_pages),'retire_reviews':sorted(retire_reviews),'required_runtime':sorted(required-kept_pages),'exclusive_runtime':exclusive_runtime,'live_study_links':live_study_links}, indent=2))
