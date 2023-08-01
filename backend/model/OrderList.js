class OrderList {
  constructor() {
    this.normalList = [];
    this.vipList = [];
    this.pendingList = [];
    this.completeList = [];
  }

  addToNormalList(order) {
    return this.normalList.push(order);
  }

  addToVipList(order) {
    return this.vipList.push(order);
  }

  getAllOrders() {
    return this.vipList.concat(this.normalList);
  }

  getPendingOrders() {
    return this.getAllOrders().filter((order) => order.status === "PENDING");
  }

  getCompletedOrders() {
    return this.getAllOrders().filter((order) => order.status === "COMPLETE");
  }
}

module.exports = OrderList;
