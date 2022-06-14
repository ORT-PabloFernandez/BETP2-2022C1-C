const { ObjectId } = require('mongodb');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').ObjectId;


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

// POR QUERY DE MONGO//
async function getSale(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({_id: new ObjectId(id)})
                        .toArray();    
    return sale;
}

// POR JS NO ANDA ID//
// async function getSale(id){
//     const connectiondb = await conn.getConnection();
//     const sale = await connectiondb
//                         .db(DATABASE)
//                         .collection(SALES)
//                         .find()
//                         .toArray();
//     const saleJS = sale.filter( (porId) => porId._id === new objectId(id) );
//     return saleJS;
// }

// POR QUERY //
// async function getPurchaseMethod(purchaseMethodFind){
//     const connectiondb = await conn.getConnection();
//     const purchase = await connectiondb
//                         .db(DATABASE)
//                         .collection(SALES)
//                         .find({purchaseMethod: purchaseMethodFind})
//                         .toArray();    
//     return purchase;
// }

// POR JS //
async function getPurchaseMethod(purchaseMethodFind){
    const connectiondb = await conn.getConnection();
    const purchase = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    
    const purchaseJS = purchase.filter( (venta) => venta.purchaseMethod === purchaseMethodFind);
    return purchaseJS;
}

async function getCustomerByEmail(customerEmail){
    const connectiondb = await conn.getConnection();
    const customer = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": customerEmail})
                        .toArray(); 
    return customer;
}

async function getCustomersUnsatisfied(){
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction": 3})
                        // .find({"customer.satisfaction": {$lt: 3} })
                        .toArray(); 
    return customers;
}

module.exports = {getAllSales, getSale, getPurchaseMethod, getCustomerByEmail, getCustomersUnsatisfied};