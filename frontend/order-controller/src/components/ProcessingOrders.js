import React, { useState, useEffect } from "react";

const CompletedOrders = () => {
  const [completedOrders, setCompletedOrders] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      //assign interval to a variable to clear it.
      fetch("http://localhost:8080/api/orders/processing")
        .then((response) => response.text())
        .then((data) => setCompletedOrders(data))
        .catch((error) =>
          console.error("Error fetching completed list:", error)
        );
    }, 1000);

    return () => clearInterval(intervalId); //This is important
  });

  return (
    <div>
      <h4>Completed Orders</h4>
      <p>{completedOrders}</p>
    </div>
  );
};

export default CompletedOrders;
