
import React, { useContext } from "react";
import { CartContext } from "../contex/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);
  const navigate = useNavigate();

  // subtotal = price x qty
  const subtotal = cart.reduce(
    (sum, i) => sum + i.price * i.qty,
    0
  );

  // ✅ yeh naya function
  const handleProceed = () => {
    // cart ka pura data Checkout page ko bhej rahe hain
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛍️ Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-msg">Your bag is empty... add some items 😊</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-row" key={item.id}>
                
                <img src={item.imageURL} alt={item.name} className="cart-img" />

                <div className="details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  {/* Quantity Buttons */}
                  <div className="quantity-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Delete
                  </button>
                </div>

                <div className="price">
                  ₹ {item.price * item.qty}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Subtotal ({cart.length} items): ₹ {subtotal}</h3>

            {/* 🔁 yaha sirf yeh change */}
            <button className="buy-btn" onClick={handleProceed}>
              Proceed to Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
