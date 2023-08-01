const orderModel = require("./Order.js");

class Bot {
  constructor(botId) {
    this.botId = botId;
    this.status = "IDLE";
    this.currentProcessingOrder = orderModel;
    this.timeoutId = null;
  }
}

module.exports = Bot;
