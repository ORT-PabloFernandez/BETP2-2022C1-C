import http from 'http';

const PORT = 3000;
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 }
  ];


http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Welcome to API INVENTORS');
            break;
        case '/api/inventors':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(inventors, null, ' '));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Page not found');
            break;
    }       
    res.end();
    
}).listen(PORT, 'localhost', ()=>{
    console.log('Servidor web levantado en: ', PORT);
});
