const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import your Sequelize instance
const stockModel = require('./stocks');

const randomPriceModel = sequelize.define('RandomPriceModel', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  priceId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  stockId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  openPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  closePrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  highPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lowPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
});
randomPriceModel.belongsTo(stockModel, {
  foreignKey: 'stockId',
  targetKey: 'stockId',
});
module.exports = randomPriceModel;
