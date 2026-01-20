import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="orders-container">
      <h2>📦 My Orders</h2>

      {orders.length === 0 && <p>No orders placed yet.</p>}

      {orders.map((o) => (
        <div className="order-box" key={o.id}>
          <h4>🧾 Order #{o.id}</h4>
          <p><b>Date:</b> {o.date}</p>
          <p><b>Name:</b> {o.name}</p>
          <p><b>Total Amount:</b> ₹{o.total}</p>
          <p><b>Payment:</b> {o.paymentMode}</p>

          <div className="order-items">
            {o.items.map((item) => (
              <p key={item.id}>
                {item.name} x {item.qty} = ₹{item.price * item.qty}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
