const express = require('express');
const router = express.Router();

/* GET listado de inventors */
router.get('/', function(req, res, next) {
  res.send('listado de inventors');
});

router.post('/', (req, res)=>{
    res.send('alta de inventor');
});


module.exports = router;