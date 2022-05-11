const mongoclient = require('mongodb').MongoClient;

const uri = "mongodb+srv://adm:tp2@cluster0.klp21.mongodb.net/sample_tp2?retryWrites=true&w=majority";

const client = new mongoclient(uri);

let instance = null;

async function getConnection(){
    let instance = await client.connect();
    return instance;
}

module.exports = {getConnection};


