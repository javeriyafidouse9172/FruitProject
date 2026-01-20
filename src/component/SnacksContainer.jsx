
// import React, { useState } from "react";
// import FruitCard from "./FruitCard";
// import './FruitContainer.css'

// import BiskitPic from "../assets/snacks/Biskit.jpeg";
// import BunPic from "../assets/Snacks/Bun.jpeg"
// import CakePic from "../assets/Snacks/Cake.jpeg"
// import ChipsPic from  "../assets/Snacks/Chips.jpeg"
// import { Link } from "react-router-dom";

// const SnacksContainer = () => {
//   const [search, setSearch] = useState("");

//   const data = [
    
//     { name: " Biskit", description: "Fresh red Biskit", price: 90, imageURL:BiskitPic },
//     { name: "Bun", description: "Fresh Bun", price: 40, imageURL:BunPic },
//     { name: "Cake", description: "Fresh Cake", price: 60, imageURL:CakePic },
//     { name: "Chips", description: "Fresh Chips", price: 70, imageURL: ChipsPic },
   
//   ];





// const filteredSnacks = data.filter(
//   (Snack) => Snack?.name?.toLowerCase().includes(search.toLowerCase())
// );


 

//   return (
//     <>

        

//         <input
//           className="search-bar"
//           type="text"
//           placeholder="Search Snacks..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

        

//       <main className="container">
//         <h1>Welcome to Grocery Store</h1> 
//         <p>Your one-stop shop for fresh and quality groceries.</p>

//         <div className="fruit-grid">
//           {filteredSnacks.map((Snack, index) => (
//             <FruitCard
//               key={index}
//               name={Snack.name}
//               description={Snack.description}
//               price={Snack.price}
//               imageURL={Snack.imageURL}
//             />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };

// export default SnacksContainer;
import React, { useState } from "react";
import FruitCard from "./FruitCard";
import './FruitContainer.css';

import BiskitPic from "../assets/snacks/Biskit.jpeg";
import BunPic from "../assets/Snacks/Bun.jpeg";
import CakePic from "../assets/Snacks/Cake.jpeg";
import ChipsPic from "../assets/Snacks/Chips.jpeg";

const SnacksContainer = () => {
  const [search, setSearch] = useState("");

  const data = [
    { id: 201, name: "Biskit", description: "Fresh red Biskit", price: 90, imageURL: BiskitPic },
    { id: 202, name: "Bun", description: "Fresh Bun", price: 40, imageURL: BunPic },
    { id: 203, name: "Cake", description: "Fresh Cake", price: 60, imageURL: CakePic },
    { id: 204, name: "Chips", description: "Fresh Chips", price: 70, imageURL: ChipsPic },
  ];

  const filteredSnacks = data.filter((snack) =>
    snack.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search Snacks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <main className="container">
        <h1>Welcome to Grocery Store</h1>
        <p>Your one-stop shop for fresh and quality groceries.</p>

        <div className="fruit-grid">
          {filteredSnacks.map((snack) => (
            <FruitCard
              key={snack.id}
              id={snack.id}
              name={snack.name}
              description={snack.description}
              price={snack.price}
              imageURL={snack.imageURL}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default SnacksContainer;
