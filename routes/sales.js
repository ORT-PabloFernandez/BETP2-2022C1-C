const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    const sale = await controller.getSale(req.params.id);
    
    res.json(sale);
});

router.get('/purchase/:purchase', async (req, res) => {
    const purchase = await controller.getPurchaseMethod(req.params.purchase);
    
    res.json(purchase);
});

router.get('/customer/:customerEmail', async (req, res) => {
    const customer = await controller.getCustomerByEmail(req.params.customerEmail);
    
    res.json(customer);
});

router.get('/unsatisfied/unsatis', async (req, res) => {
    const customers = await controller.getCustomersUnsatisfied();
    
    res.json(customers);
});



module.exports = router;