const mongodb = require('mongodb');
const connection = require('./connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function getAllUsers(){
    const connectdb = await connection.getConnection();

    const users = await connectdb
                    .db('sample_tp2')
                    .collection('users')
                    .find()
                    .toArray();
    return users;
    
}

async function addUser(user){
    const connectdb = await connection.getConnection();

    user.password = await bcrypt.hash(user.password, 8);

    const result = await connectdb.db('sample_tp2')
                            .collection('users')
                            .insertOne(user);
    return result;
}

async function findByCredentials(email, password){
    const connectdb = await connection.getConnection();
    const user = await connectdb.db('sample_tp2')
                    .collection('users')
                    .findOne({email: email});
    // validar si el usuario existe en nuestra base de datos
    if(!user){
        throw new Error('Credenciales no validas');
    }

    // validar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('Credenciales no validas');        
    }
    
    return user;
}

function generateToken(user){
    const token = jwt.sign({_id:user._id}, 'clavesecreta', {expiresIn: '2h'} );
    return token;
}

module.exports = {addUser, getAllUsers, findByCredentials, generateToken};


