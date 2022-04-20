
// setTimeout -> ejecuta un call al cabo de determinado numero de microsegundos
setTimeout(() => {
    console.log('Hola mundo despues de 7s');
}, 7000);

setTimeout(() => {
    console.log('Hola mundo despues de 2s');
}, 2000)
let i = 0;
let id = setInterval(() => {
    i++;
    console.log('Hola mundo en el segundo: ', i);    
    if(i==5){
        clearInterval(id);
    }
}, 1000)