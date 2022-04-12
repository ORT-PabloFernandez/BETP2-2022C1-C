
// TODO: getInventors()
// TODO: getInventor(id)
// TODO: pushInventor(inventor)
// TODO: updateInventor(inventor)
// TODO: deleteIventor(id)

//TIP: Añadir al json una propiedad id que identifique el objeto

const fs = require('fs');
const PATH_INVENTORS = './inventors.json';

function getInventors(){
    return JSON.parse(fs.readFileSync(PATH_INVENTORS, 'utf-8'));
}

function updateInventor(inventor){
    const inventors = getInventors();
    //console.table(inventors);

    let inventorUpdate = inventors.find(inv => inv._id === inventor._id);
    
    inventorUpdate.first = inventor.first;
    inventorUpdate.last = inventor.last;
    inventorUpdate.year = inventor.year;

    //console.table(inventors);
    writeInventors(inventors);
}

function writeInventors(inventors){
    fs.writeFileSync(PATH_INVENTORS, JSON.stringify(inventors, null, '  '));
}

updateInventor({
        "_id": 4,
        "first": "Marie",
        "last": "Curie",
        "year": 2000
   });
