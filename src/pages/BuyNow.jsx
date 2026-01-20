import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BuyNow.css";

const BuyNow = () => {
  const { state } = useLocation();
  const product = state?.product;

  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2>No Product Selected!</h2>;
  }

  const total = product.price * qty;

  const handleConfirm = () => {
    const order = {
      id: "ORDER" + Date.now(),
      product,
      qty,
      total,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("singleOrder", JSON.stringify(order));

    navigate("/checkout", { state: { cart: [ { ...product, qty } ] } });
  };

  return (
    <div className="buynow-container">
      <div className="buynow-card">

        <img src={product.imageURL} className="buynow-img" alt={product.name} />

        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div className="qty-box">
          <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        <h3>Total: ₹ {total}</h3>

        <button className="confirm-order-btn" onClick={handleConfirm}>
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
};

export default BuyNow;
