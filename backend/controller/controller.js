const orderService = require("../service/service.js");

const addNormalOrder = (req, res) => {
  res.send(orderService.addNormalOrder());
};

const addVipOrder = (req, res) => {
  res.send(orderService.addVipOrder());
};

// for testing
const getAllOrders = (req, res) => {
  res.send(orderService.getAllOrders());
};

const getPendingOrders = (req, res) => {
  res.send(orderService.getPendingOrders());
};

const getCompletedOrders = (req, res) => {
  res.send(orderService.getCompletedOrders());
};

const addBot = (req, res) => {
  res.send(orderService.addBot());
};

const deleteBot = (req, res) => {
  res.send(orderService.deleteBot());
};
module.exports = {
  // getOrders,
  addNormalOrder,
  addVipOrder,
  getAllOrders,
  getPendingOrders,
  getCompletedOrders,
  addBot,
  deleteBot,
};
