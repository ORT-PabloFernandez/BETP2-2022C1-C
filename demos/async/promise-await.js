import fs from 'fs/promises';
const path = './inventors.json';
const inventor = { _id: 101, first: 'Rene', last: 'Favarolo', year: 2001};

function getInventors(){
    return fs.readFile(path, 'utf-8');
}

async function pushInventor(inventor){    
    let inventors = JSON.parse(await getInventors());
    inventors.push(inventor);
    return inventors;
}

function writeInventor(inventors){
    return fs.writeFile(path, JSON.stringify(inventors, null, ' '));
}

try {
    let inventors = await getInventors();
    inventors =  await pushInventor(inventor);
    await writeInventor(inventors);
} catch (error) {
    console.log(error);
}



