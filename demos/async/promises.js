// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Persistir la operacion de insertar
// 4.- Leer el archivo actualizado
// 5.- mostrarlo en consola.

import fs from 'fs/promises';
const path = './inventors.json';
const inventor = { _id: 101, first: 'Rene', last: 'Favarolo', year: 2000};

// 1.- Leer el archivo
fs.readFile(path, 'utf-8')
    .then(data => {        
        let inventors = JSON.parse(data);
        // 2.- Insertar
        inventors.push(inventor);
        // 3.- Escribir
        return fs.writeFile(path, JSON.stringify(inventors, null, ' ')); 
    })
    .then(() =>{
        // 4.- Leer
        return fs.readFile(path, 'utf-8');
    })
    .then(data =>{
        // 5.- Mostrar
        console.log(JSON.parse(data));
    })
    .catch(error => {
        console.log(error);
    });


