require('dotenv').config();
const jwt = require('jsonwebtoken');


function auth(req, res, next){
    const token = req.header('Authorization').replace('Bearer ','');
    console.log(token);
    try {
        const user = jwt.verify(token, process.env.CLIENT_SECRET);
        console.log(user);
        next();
    } catch (error) {
        res.status(401).send({error: error.message});
    }
}

module.exports = auth;