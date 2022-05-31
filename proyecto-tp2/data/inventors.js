const connection = require('./connection');
const objectId = require('mongodb').ObjectId;

async function getInventors(){
    const clientmongo = await connection.getConnection();
    const inventors = await clientmongo
        .db('sample_tp2')
        .collection('inventors')
        .find()
        .toArray();
    return inventors
}

async function getInventor(id){
    const clientmongo = await connection.getConnection();
    const inventor = await clientmongo
        .db('sample_tp2')
        .collection('inventors')
        .find({_id: new objectId(id)})
        .toArray();
    return inventor
}

async function addInventor(inventor){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo
        .db('sample_tp2')
        .collection('inventors')
        .insertOne(inventor);
    return result;
}

// TODO: async function updateInventor(inventor)
// tip .updateOne()

async function updateInventor(inventor){
   // const inventor = {_id: 12341234213, first:"pepe", last :"perez"};
   
   const query = {_id: new objectId(inventor._id)};
   const newValues = {$set:{
       first: inventor.first,
       last: inventor.last,
       year: inventor.year
   }};

   const clientmongo = await connection.getConnection();
   const result = await clientmongo
        .db('sample_tp2')
        .collection('inventors')
        .updateOne(query, newValues);
    return result;
}

// TODO: async function deleteInventor(id)
// tip .deleteOne()

module.exports = {getInventors, getInventor, addInventor, updateInventor};