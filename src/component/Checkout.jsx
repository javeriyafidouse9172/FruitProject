
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { state } = useLocation();
  const cart = state?.cart || [];

  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [payment, setPayment] = useState("cod");

  // ⭐ Popup state
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("⚠️ Please fill all fields");
      return;
    }

    const orderId = "ORD" + Date.now();

    const newOrder = {
      id: orderId,
      name: form.name,
      phone: form.phone,
      address: form.address,
      items: cart,
      total: totalAmount,
      paymentMode: payment,
      date: new Date().toLocaleString(),
    };

    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
    oldOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(oldOrders));

    setShowPopup(true); // Show success popup
  };

  const handleContinue = () => {
    navigate("/"); // Go home
  };

  return (
    <>
      <div className="checkout-container">
        <h2 className="checkout-title">Order Summary</h2>

        {cart.length === 0 ? (
          <p>No Product Selected!</p>
        ) : (
          <div className="checkout-box">

            {/* LEFT: PRODUCTS */}
            <div className="product-section">
              {cart.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img src={item.imageURL} alt={item.name} className="checkout-img" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p><b>Qty:</b> {item.qty}</p>
                    <p><b>Total:</b> ₹ {item.price * item.qty}</p>
                  </div>
                </div>
              ))}

              <h3 className="total-bill">Final Amount: ₹ {totalAmount}</h3>
            </div>

            {/* RIGHT: DETAILS */}
            <div className="details-section">
              <h3>Shipping Details</h3>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="number"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
              />

              <textarea
                name="address"
                rows="3"
                placeholder="Full Address"
                value={form.address}
                onChange={handleChange}
              />

              <div className="payment-box">
                <h3>Payment Method</h3>

                <label>
                  <input
                    type="radio"
                    value="cod"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                  />
                  Cash on Delivery
                </label>

                <label>
                  <input
                    type="radio"
                    value="upi"
                    checked={payment === "upi"}
                    onChange={() => setPayment("upi")}
                  />
                  UPI (GPay / PhonePe)
                </label>

                <label>
                  <input
                    type="radio"
                    value="card"
                    checked={payment === "card"}
                    onChange={() => setPayment("card")}
                  />
                  Debit / Credit Card
                </label>
              </div>

              <button className="confirm-btn" onClick={handleConfirm}>
                🚚 Confirm Order
              </button>
            </div>

          </div>
        )}
      </div>

      {/* ⭐ SUCCESS POPUP */}
      {showPopup && (
        <div className="popup-overlay">

          {/* Confetti */}
          <div className="confetti"></div>

          <div className="popup-box">

            {/* Green Tick */}
            <div className="tick-circle">
              <div className="tick-mark">&#10003;</div>
            </div>

            <h2>Order Successfully Placed!</h2>
            <p>Thank you for shopping with us 😊</p>

            <button className="continue-btn" onClick={handleContinue}>
              Continue Shopping
            </button>

            {/* Success sound */}
            <audio autoPlay>
              <source src="https://www.fesliyanstudios.com/play-mp3/4382" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
