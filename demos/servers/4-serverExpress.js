import express from 'express';

const PORT = 3000;
const app = express();
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 }
  ];

app.get('/', (req, res) =>{
    res.send(`
        <html>
            <head></head>
            <body>
                <h1> Hola mundo desde Express </h1>
            </body>
        </html>
    `);
});

app.get('/api/inventors', (req, res)=>{
    res.json(inventors);
});


app.listen(PORT, ()=> {
    console.log('Servidor Express levantado en el puerto: ', PORT);
});