// Mechanically refresh the two embedded screenshots without changing the device artwork.
const fs=require('node:fs');
const [svgPath,desktopPath,mobilePath]=process.argv.slice(2);
if(!svgPath||!desktopPath||!mobilePath)throw new Error('Usage: node refresh-device-screens.cjs preview.svg desktop.jpg mobile.jpg');
const svg=fs.readFileSync(svgPath,'utf8');
const images=[...svg.matchAll(/<image\b[^>]*href="data:image\/jpeg;base64,[^"]+"[^>]*>/g)];
if(images.length!==2||!images[0][0].includes('laptopScreen')||!images[1][0].includes('phoneScreen'))throw new Error('Expected one embedded laptop screen and one phone screen');
let result=svg;
for(const [index,file] of [desktopPath,mobilePath].entries()){
  const bytes=fs.readFileSync(file);
  if(bytes[0]!==0xff||bytes[1]!==0xd8)throw new Error('Screenshots must be JPEG files');
  result=result.replace(images[index][0],images[index][0].replace(/data:image\/jpeg;base64,[^"]+/,`data:image/jpeg;base64,${bytes.toString('base64')}`));
}
fs.writeFileSync(svgPath,result);
console.log('Refreshed laptop and phone screens; device geometry preserved.');
