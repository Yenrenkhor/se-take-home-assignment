class Order {
  constructor(type) {
    this.orderId = Date.now();
    this.type = type;
    this.status = "PENDING";
    this.processedBy = 0;
  }
}

module.exports = Order;
