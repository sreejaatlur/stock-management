const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Import your Sequelize instance
const userModel = require('./User');
const transactionModel = require('./transactions');

const cashHistoryModel = sequelize.define('CashHistoryModel', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  transactionId: {
    type: DataTypes.UUID,
    primaryKey: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  createdAt: { type: DataTypes.DATE, field: 'created_at' },
  updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
});
cashHistoryModel.belongsTo(userModel, {
  foreignKey: 'userId',
  targetKey: 'id',
});
cashHistoryModel.belongsTo(transactionModel, {
  foreignKey: 'transactionId',
  targetKey: 'transactionId',
});

module.exports = cashHistoryModel;
