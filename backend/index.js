const express = require("express");
const cors = require("cors");
const orderController = require("./controller/controller.js");
const app = express();
app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

app.use(express.json());

app.get("/api/orders", orderController.getAllOrders);
app.get("/api/orders/pending", orderController.getPendingOrders);
app.get("/api/orders/completed", orderController.getCompletedOrders);
app.post("/api/orders/normal", orderController.addNormalOrder);
app.post("/api/orders/vip", orderController.addVipOrder);

// // Routes for bot management
app.post("/api/bots/add", orderController.addBot);
app.delete("/api/bots/delete", orderController.deleteBot);

app.get("/", function (req, res) {
  res.send("Test");
});

let port = 8080;
app.listen(port, function () {
  console.log("Server started successfully");
});
