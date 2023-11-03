const restify = require('restify');
const sequelize = require('./sequelize');
const userModel = require('./models/User');
const stockModel = require('./models/stocks');
const transactionModel = require('./models/transactions');
const limitOrderModel = require('./models/limitOrder');
const cashHistoryModel = require('./models/cashHistory');
const randomPriceModel = require('./models/randomPrice');

async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}

syncDatabase();
const server = restify.createServer();

server.get('/', (req, res, next) => {
  res.send('Hello, World!');
  return next();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
