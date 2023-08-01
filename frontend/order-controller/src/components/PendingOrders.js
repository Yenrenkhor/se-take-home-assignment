import React, { useState, useEffect } from "react";

const PendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      fetch("http://localhost:8080/api/orders/pending")
        .then((response) => response.text())
        .then((data) => setPendingOrders(data))
        .catch((error) => console.error("Error fetching order status:", error));
    }, 1000);

    return () => clearInterval(intervalId); //This is important
  });

  return (
    <div>
      <h4>Pending List</h4>
      <p>{pendingOrders}</p>
    </div>
  );
};

export default PendingOrders;
