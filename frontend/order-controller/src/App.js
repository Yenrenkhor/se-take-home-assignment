import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  addBot,
  addNormalOrder,
  getPendingOrders,
  addVipOrder,
  deleteBot,
} from "../src/api/api.js";
import PendingOrders from "./components/PendingOrders.js";
import CompletedOrders from "./components/CompletedOrders.js";

function clickMe() {
  alert("You clicked me!");
}

export default function App() {
  return (
    <>
      <div>
        <button type="button" onClick={addNormalOrder}>
          New Normal Order
        </button>
      </div>
      <div>
        <button type="button" onClick={addVipOrder}>
          New VIP Order
        </button>
      </div>
      <div>
        <button type="button" onClick={addBot}>
          +Bot
        </button>
      </div>
      <div>
        <button type="button" onClick={deleteBot}>
          -Bot
        </button>
      </div>
      <div>
        <div>
          <PendingOrders />
          <CompletedOrders />
        </div>
      </div>
    </>
  );
}
