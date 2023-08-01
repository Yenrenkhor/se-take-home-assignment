const Order = require("../model/Order.js");
const Bot = require("../model/Bot.js");
const OrderList = require("../model/OrderList.js");
const BotList = require("../model/BotList.js");

const orderList = new OrderList();
const botList = new BotList();

// const pendingOrders = [];
const completeOrders = [];
const processBotList = [];

let numberOfBots = 0;

const addNormalOrder = () => {
  const order = new Order("NORMAL");
  orderList.addToNormalList(order);
};

const addVipOrder = () => {
  const order = new Order("VIP");
  orderList.addToVipList(order);
};

function getAllOrders() {
  return orderList.getAllOrders();
}

function getPendingOrders() {
  return orderList.getPendingOrders();
}

function getCompletedOrders() {
  return orderList.getCompletedOrders();
}

const addBot = () => {
  numberOfBots += 1;
  const bot = new Bot(numberOfBots);
  processOrders(bot);
};

const deleteBot = () => {
  console.log(processBotList);
  if (numberOfBots > 0) {
    numberOfBots -= 1;
  }
  let latestProcessingBot = processBotList.slice(-1)[0];
  if (latestProcessingBot.currentProcessingOrder !== null) {
    latestProcessingBot.currentProcessingOrder.status = "PENDING";
    latestProcessingBot.currentProcessingOrder.processedBy = 0;
  }
  processBotList.pop();
  clearTimeout(latestProcessingBot.timeoutId);

  console.log(processBotList);
};

function processOrders(bot) {
  const pendingOrderList = orderList.getPendingOrders();
  if (pendingOrderList.length > 0 && numberOfBots > 0) {
    const orderToProcess = pendingOrderList[0];
    orderToProcess.status = "PROCESSING";
    orderToProcess.processedBy = bot.botId;
    bot.status = "PROCESSING";
    bot.currentProcessingOrder = orderToProcess;
    bot.timeoutId = setTimeout(() => {
      orderToProcess.status = "COMPLETE";
      processOrders(bot);
    }, 10000);
    processBotList.push(bot);
  } else {
    bot.status = "IDLE";
    bot.currentProcessingOrder = null;
    console.log(bot);
  }
}

module.exports = {
  addNormalOrder,
  addVipOrder,
  getAllOrders,
  getPendingOrders,
  getCompletedOrders,
  addBot,
  deleteBot,
};
