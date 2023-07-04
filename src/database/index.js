const sequelize = require('sequelize');

const DB_NAME = 'lavie';
const DB_USER = 'root';
const DB_PASS = 'root';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
};

let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro de conexão com banco de dados.");
}

async function hasConnection(){
    try {
        await db.authenticate();
        console.log('Banco de dados conectado.')
    } catch (error) {
        console.error("Erro de conexão com banco de dados.");
    }
}

Object.assign(db, {
    hasConnection,
})

module.exports = db;