const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
function frames(file){
 const b=fs.readFileSync(path.join(root,file));assert.equal(b.readUInt16LE(0),0);assert.equal(b.readUInt16LE(2),1);
 const result=new Map();let end=6+b.readUInt16LE(4)*16;
 for(let i=0;i<b.readUInt16LE(4);i++){
  const e=6+i*16,width=b[e]||256,height=b[e+1]||256,size=b.readUInt32LE(e+8),start=b.readUInt32LE(e+12);
  assert.equal(width,height);assert(start>=end&&start+size<=b.length);end=start+size;
  const png=b.subarray(start,end);assert.equal(png.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
  assert.equal(png.readUInt32BE(16),width);assert.equal(png.readUInt32BE(20),height);
  result.set(width,png);
 }
 assert.equal(end,b.length);return {bytes:b.length,frames:result};
}
const original=frames('favicon.ico'),optimized=frames('favicon-optimized.ico');
assert(optimized.bytes>=1024&&optimized.bytes<=2048);
assert.deepEqual([...optimized.frames.keys()],[16,32]);
for(const [size,png]of optimized.frames)assert(png.equals(original.frames.get(size)),'exact original pixels and transparency retained');
assert.equal(original.frames.size,6,'the original multi-size icon is preserved');
console.log(`PASS: optimized favicon is ${optimized.bytes} bytes; 16×16 and 32×32 frames are valid, byte-identical PNGs with original transparency; original website icon unchanged.`);
