const express = require('express');
const router = express.Router();
const data = require('./../data/inventors');

/* GET listado de inventors */
router.get('/', async function(req, res, next) {
  console.log('TEST');
  const inventors = await data.getInventors();
  res.json(inventors);
});

router.get('/:id', async (req, res) => {
  const inventor = await data.getInventor(req.params.id);
  res.json(inventor);
});

router.post('/', async (req, res)=>{
    const result = await data.addInventor(req.body);
    res.json(result);
});

router.put('/:id', async (req, res)=>{
  const inventor = req.body;
  inventor._id = req.params.id;
  const result = await data.updateInventor(inventor);
  res.json(result);
});

// TODO PUT: '/'
// TODO DELETE: '/:id'


module.exports = router;