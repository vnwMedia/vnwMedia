// Retain the existing tab-sized PNG frames byte-for-byte; no artwork is resampled.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),input=fs.readFileSync(path.join(root,'favicon.ico'));
assert.equal(input.readUInt16LE(0),0);assert.equal(input.readUInt16LE(2),1);
const frames=[];
for(let i=0;i<input.readUInt16LE(4);i++){
 const offset=6+16*i,width=input[offset]||256,height=input[offset+1]||256;
 if(width!==height||![16,32].includes(width))continue;
 const start=input.readUInt32LE(offset+12),size=input.readUInt32LE(offset+8);
 assert(start+size<=input.length);
 frames.push({width,entry:Buffer.from(input.subarray(offset,offset+16)),data:input.subarray(start,start+size)});
}
frames.sort((a,b)=>a.width-b.width);assert.deepEqual(frames.map(f=>f.width),[16,32]);
const header=Buffer.alloc(6);header.writeUInt16LE(1,2);header.writeUInt16LE(frames.length,4);
let next=6+16*frames.length;
for(const frame of frames){frame.entry.writeUInt32LE(next,12);next+=frame.data.length;}
const output=Buffer.concat([header,...frames.map(f=>f.entry),...frames.map(f=>f.data)]);
assert(output.length>=1024&&output.length<=2048,'optimized icon must be 1–2 KiB');
fs.writeFileSync(path.join(root,'favicon-optimized.ico'),output);
console.log(JSON.stringify({file:'favicon-optimized.ico',original_bytes:input.length,optimized_bytes:output.length,kib:output.length/1024,unchanged_sizes:[16,32],original_preserved:true}));
