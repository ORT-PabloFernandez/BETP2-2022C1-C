const connection = require('./connection');

async function getInventors(){
    const clientmongo = await connection.getConnection();
    const inventors = await clientmongo.db('sample_tp2').collection('inventors').find().toArray();
    return inventors
}

module.exports = {getInventors};