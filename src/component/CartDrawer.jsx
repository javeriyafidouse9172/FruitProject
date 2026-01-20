import React from "react";
import { useCart } from "../contex/CartContext";
import "./CartDrawer.css";

const CartDrawer = () => {
  const {
    cartItems,
    isDrawerOpen,
    toggleDrawer,
    removeFromCart,
    changeQty,
    clearCart,
  } = useCart();

  if (!isDrawerOpen) return null;

  const total = cartItems.reduce((sum, p) => sum + p.qty * p.price, 0);

  return (
    <div className="drawer-bg" onClick={toggleDrawer}>
      <div className="drawer-box" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h3>🛒 Your Bag</h3>
          <button onClick={toggleDrawer}>✕</button>
        </div>

        <div className="drawer-items">
          {cartItems.length === 0 && <p>Cart is empty</p>}

          {cartItems.map((p) => (
            <div key={p.id} className="drawer-item">
              <img src={p.imageURL} alt={p.name} />
              <div>
                <strong>{p.name}</strong>
                <p>₹ {p.price}</p>
                <div className="qty">
                  <button onClick={() => changeQty(p.id, p.qty - 1)}>-</button>
                  <span>{p.qty}</span>
                  <button onClick={() => changeQty(p.id, p.qty + 1)}>+</button>
                </div>
              </div>
              <button className="remove" onClick={() => removeFromCart(p.id)}>
                x
              </button>
            </div>
          ))}
        </div>

        <hr />
        <div className="drawer-footer">
          <h4>Total: ₹ {total}</h4>
          <button onClick={clearCart}>Clear Cart</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
