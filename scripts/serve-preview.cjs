// Read-only local server that reproduces GitHub Pages' /vnwMedia/ project base.
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),base='/vnwMedia/',port=Number(process.argv[2]||8765);
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.xml':'application/xml','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.gif':'image/gif','.ico':'image/x-icon','.woff2':'font/woff2','.mp4':'video/mp4'};
const server=http.createServer((request,response)=>{
 if(!['GET','HEAD'].includes(request.method)){response.writeHead(405).end();return;}
 const url=new URL(request.url,'http://127.0.0.1:'+port);
 if(url.pathname==='/vnwMedia'){response.writeHead(301,{Location:base+url.search}).end();return;}
 if(!url.pathname.startsWith(base)){response.writeHead(404).end('Outside preview project');return;}
 let file;
 try{file=path.resolve(root,decodeURIComponent(url.pathname.slice(base.length)));}catch{response.writeHead(400).end();return;}
 if(file!==root&&!file.startsWith(root+path.sep)){response.writeHead(403).end();return;}
 try{
  if(fs.statSync(file).isDirectory()){
   if(!url.pathname.endsWith('/')){response.writeHead(301,{Location:url.pathname+'/'+url.search}).end();return;}
   file=path.join(file,'index.html');
  }
  const stat=fs.statSync(file);if(!stat.isFile())throw new Error('Not a file');
  response.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Content-Length':stat.size,'Cache-Control':'no-store'});
  if(request.method==='HEAD')response.end();else fs.createReadStream(file).pipe(response);
 }catch{response.writeHead(404).end('Page or asset not found');}
});
server.listen(port,'127.0.0.1',()=>process.stdout.write('Read-only preview: http://127.0.0.1:'+port+base+'\n'));
