import http from 'http';

http.createServer((req, res)=>{
    res.writeHead(401, {'Content-Type': 'text/html'});
    res.write('No esta autorizado el ingreso a este usuario');
    res.end();
}).listen(3000, '127.0.0.1', ()=> {
    console.log('Servidor web levantado y escuchando el puerto: 3000');
});