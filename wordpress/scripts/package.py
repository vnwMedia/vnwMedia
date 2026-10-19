"""Package the complete uploadable theme, excluding local generation metadata."""
from pathlib import Path
import argparse, hashlib, re, zipfile
root=Path(__file__).resolve().parents[1]
theme=root/'theme/vnw-media'
version=re.search(r'^Version:\s*(\S+)',(theme/'style.css').read_text(),re.M)[1]
parser=argparse.ArgumentParser()
parser.add_argument('--output',type=Path,default=root/'dist'/f'vnw-media-wordpress-elementor-{version}.zip')
output=parser.parse_args().output.resolve()
output.parent.mkdir(parents=True,exist_ok=True)
with zipfile.ZipFile(output,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
 for file in sorted(theme.rglob('*')):
  if file.is_file() and file.name not in ('.DS_Store','job.json'):
   archive.write(file,Path('vnw-media')/file.relative_to(theme))
with zipfile.ZipFile(output) as archive:
 assert archive.testzip() is None,'Corrupted archive'
 assert all(name.startswith('vnw-media/') and '..' not in Path(name).parts for name in archive.namelist())
checksum=hashlib.sha256(output.read_bytes()).hexdigest()
output.with_suffix(output.suffix+'.sha256').write_text(checksum+'  '+output.name+'\n')
print(f'{output}\n{output.stat().st_size} bytes\nSHA256 {checksum}')
