
import React, { useState, useContext } from "react";
import "./FruitCard.css";
import { CartContext } from "../contex/CartContext";
import { useNavigate } from "react-router-dom";

const FruitCard = ({
  id,
  name,
  description,
  price,
  imageURL,
  rating = 4.5,
  stock = true,
  discount = 0,
  packs = [1, 2, 3, 4, 5],
}) => {
  const { addToCart } = useContext(CartContext);
  const [qty, setQty] = useState(packs[0]); 
  const navigate = useNavigate();

  // UI ke liye total display only
  const finalPrice = price * qty;

  // 🟢 VERY IMPORTANT — product data
  const item = {
    id,
    name,
    description,
    imageURL,
    price,   // single unit price
    qty,     // selected kg
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: item } });
  };

  return (
    <div className="fruit-card">

      <div className="top-row">
        <span className="wishlist">❤️</span>
        <span className={`stock-badge ${stock ? "in" : "out"}`}>
          {stock ? "In Stock" : "Sold Out"}
        </span>
      </div>

      <div className="fruit-img">
        <img src={imageURL} alt={name} />
      </div>

      <h3 className="fruit-name">{name}</h3>
      <p className="fruit-desc">{description}</p>

      <div className="rating">⭐ {rating}</div>

      <div className="pack-row">
        {packs.map((p) => (
          <button
            key={p}
            className={`pack-btn ${qty === p ? "active" : ""}`}
            onClick={() => setQty(p)}
          >
            {p} Kg
          </button>
        ))}
      </div>

      <div className="price-box">
        <span className="final">₹ {finalPrice}</span>
      </div>

      <div className="button-row">
        {/* SEND FULL PRODUCT */}
        <button className="btn add-btn" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
        <button 
        className="buy-btn"
      onClick={() => navigate("/buynow", { state: { product: item } })}
>
      Buy Now
         </button>
        {/* <button className="btn buy-btn" onClick={handleBuyNow}>
          Buy Now
        </button> */}
      </div>
    </div>
  );
};

export default FruitCard;
