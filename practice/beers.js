/**
 * En el siguiente array de objetos beers
 * 1.- Desarrollar una function (setPrice) que retorne un array que incluya el precio (price) segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el price es 300
 *     b) Si el grado alcoholico es >= 5.0 el price es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y su price es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name (addFileName) a cada uno de los objetos, esta propiedad debe tener solo
 * el nombre del archivo de la propiedad label (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por price (orderPrice)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];

function orderBeers(beers){
  return beers
    .sort((a,b)=> a.type > b.type ? 1:-1);
}

console.log(orderBeers(beers));