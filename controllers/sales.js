const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){
    return sales.getSale(id);
}

async function getPurchaseMethod(purchaseMethodFind){
    return sales.getPurchaseMethod(purchaseMethodFind);
}

async function getCustomerByEmail(customerEmail){
    return sales.getCustomerByEmail(customerEmail);
}

async function getCustomersUnsatisfied(){
    return sales.getCustomersUnsatisfied();
}

module.exports = {getSales, getSale, getPurchaseMethod, getCustomerByEmail, getCustomersUnsatisfied};