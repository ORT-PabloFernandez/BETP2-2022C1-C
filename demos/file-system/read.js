// NOTA: tambien se puede usar import en lugar de require, pero se tienen que hacer algunas cosas previas
const fs = require('fs');

let texto = fs.readFileSync('./texto.txt', 'utf-8');

texto += " hola mundo desde nodejs";

fs.writeFileSync('./texto.txt', texto);

texto = fs.readFileSync('./texto.txt', 'utf-8');

console.log(texto);