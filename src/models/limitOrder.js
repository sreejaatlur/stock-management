const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import your Sequelize instance
const userModel = require('./User');
const stockModel = require('./stocks');
const limitOrderModel = sequelize.define('LimitOrderModel', {
  orderId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  stockId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  orderType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiryDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
});
limitOrderModel.belongsTo(userModel, { foreignKey: 'userId', targetKey: 'id' });
limitOrderModel.belongsTo(stockModel, {
  foreignKey: 'stockId',
  targetKey: 'stockId',
});
module.exports = limitOrderModel;
