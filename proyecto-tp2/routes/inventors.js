const express = require('express');
const router = express.Router();
const data = require('./../data/inventors');

/* GET listado de inventors */
router.get('/', async function(req, res, next) {
  const inventors = await data.getInventors();
  res.json(inventors);
});

router.post('/', (req, res)=>{
    res.send('alta de inventor');
});


module.exports = router;