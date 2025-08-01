const dbConfig = require ("../config");

const Sequelize= require ("sequelize");
const { dialect } = require("../config/db.config");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases:false,

    pool:{
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle : dbConfig.pool.idle
    }
});

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./product.model.js")(sequelize, Sequelize);

module.exports = db;