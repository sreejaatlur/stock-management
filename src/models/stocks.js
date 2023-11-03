const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import your Sequelize instance

const stockModel = sequelize.define('StockModel', {
  stockId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stockTicker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  volume: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  initialPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
});

module.exports = stockModel;
