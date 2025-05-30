const { DataTypes } = require('sequelize');
const sequelize = require('./conexion'); 

const Mascota = sequelize.define('Mascota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'mascotas',
  timestamps: false
});

module.exports = Mascota;
