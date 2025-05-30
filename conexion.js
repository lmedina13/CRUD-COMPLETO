const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'mascotas.sqlite' 
});

module.exports = sequelize;