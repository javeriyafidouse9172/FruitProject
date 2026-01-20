

// import { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // ADD ITEM — IF EXIST → increase qty
//   const addToCart = (item) => {
//     setCart((prev) => {
//       const found = prev.find((p) => p.id === item.id);

//       // Already exists → increase qty
//       if (found) {
//         return prev.map((p) =>
//           p.id === item.id ? { ...p, qty: p.qty + 1 } : p
//         );
//       }

//       // First time → add new card
//       return [...prev, { ...item, qty: 1 }];
//     });
//   };

//   // DELETE ITEM using id
//   const removeFromCart = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // INCREASE QTY
//   const increaseQty = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   // DECREASE QTY but not below 1
//   const decreaseQty = (id) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === id && item.qty > 1
//           ? { ...item, qty: item.qty - 1 }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQty,
//         decreaseQty,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 1️⃣ Load previous cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 2️⃣ Save every update to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  // ➤ ADD ITEM
  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === item.id);

      if (found) {
        // already exists → qty +
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      // first time → qty = 1
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ➤ DELETE
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ➤ INCREASE
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➤ DECREASE
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
