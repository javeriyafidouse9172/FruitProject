
// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Nav.css'



// const Nav = ({ search, setSearch }) => {
//   return (
//     <div className="nav">

//       <Link to="/">Home</Link>
//       <Link to="/fruits">Fruits</Link>
//       <Link to="/vegetable">Vegetable</Link>
//       <Link to="/chocolate">Chocolate</Link>
//       <Link to="/snacks">Snacks</Link>
//       <Link to="/ice-cream">Ice-cream</Link>
//       <div className="icons">
//         <span>👤 Profile</span>
//         <span>♡ Wishlist</span>
//         <span>🛒 Bag</span>
//       </div>

//     </div>
//   )
// }

// export default Nav


// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";
// import { CartContext } from "../contex/CartContext";

// const Nav = ({ search, setSearch }) => {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className="nav">

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/fruits">Fruits</Link>
//         <Link to="/vegetable">Vegetable</Link>
//         <Link to="/chocolate">Chocolate</Link>
//         <Link to="/snacks">Snacks</Link>
//         <Link to="/ice-cream">Ice-cream</Link>
//       </div>

//       <div className="icons">
//         <span>👤 Profile</span>
//         <span>♡ Wishlist</span>
//         <span>🛒 Bag ({cart.length})</span>
//       </div>

//     </div>
//   );
// };

// export default Nav;



// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "./Nav.css";
// import { CartContext } from "../contex/CartContext";

// const Nav = ({ search, setSearch }) => {
//   const { cart } = useContext(CartContext);

//   return (
//     <div className="nav">

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/fruits">Fruits</Link>
//         <Link to="/vegetable">Vegetable</Link>
//         <Link to="/chocolate">Chocolate</Link>
//         <Link to="/snacks">Snacks</Link>
//         <Link to="/ice-cream">Ice-cream</Link>
//       </div>

//       <div className="icons">
//         <span>👤 Profile</span>
//         <span>♡ Wishlist</span>

//         {/* Bag count + Cart page link */}
//         <Link to="/cart" className="bag-link">
//           🛒 Bag ({cart.length})
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default Nav;




import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { CartContext } from "../contex/CartContext";

const Nav = ({ search, setSearch }) => {

  const { cart } = useContext(CartContext);

  return (
    <div className="nav">

      {/* LEFT MENU LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/fruits">Fruits</Link>
        <Link to="/vegetable">Vegetable</Link>
        <Link to="/chocolate">Chocolate</Link>
        <Link to="/snacks">Snacks</Link>
        <Link to="/ice-cream">Ice-cream</Link>
      </div>

      {/* RIGHT SIDE ICONS */}

      <div className="nav-right">
     
    </div>
         <div className="icons">
               <Link to="/profile" className="nav-item">
               👤 Profile
            </Link>
        <span>♡ Wishlist</span>

        {/* Cart Page */}
        <Link to="/cart" className="bag-link">
          🛒 Bag ({cart.length})
        </Link>

        {/* Checkout Page */}
        <Link to="/checkout" className="checkout-link">
          🚀 Checkout
        </Link>
      </div>

      
      
    </div>
  );
};

export default Nav;
