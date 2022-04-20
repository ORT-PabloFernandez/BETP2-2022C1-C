import fs from 'fs';
// Siempre se debe utilizar las funciones por defecto de fs. No utilizar las sync

// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Persistir la operacion de insertar
// 4.- Leer el archivo actualizado
// 5.- mostrarlo en consola.

const path = './inventors.json';
let inventors = [];

// 1.- Lectura
fs.readFile(path, 'utf-8', (err, data) => {
    if(!err){
        inventors = JSON.parse(data);
        // 2.- Insertar
        inventors.push({first: 'lalala', last: 'lalalal', year: 1000});    
        fs.writeFile(path, JSON.stringify(inventors, null, ' '), (err) => {
            // 3.- Lectura del archivo
            if(!err){
            fs.readFile(path, 'utf-8', (err, data) => {
                // 4.- Mostar en consola
                console.log(JSON.parse(data));
            });
            } else {
                console.log('Error en la escritura del archivo', err);
            }
        });        
    } else {
        console.log('Error en la lectura del archivo', err);
    }
});





