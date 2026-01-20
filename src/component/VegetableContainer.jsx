// import React, { useState } from "react";
// import FruitCard from "./FruitCard";
// import "./FruitContainer.css";  // same CSS works for vegetables too

// // IMPORT VEGETABLE IMAGES
// // IMPORT VEGETABLE IMAGES
// import PotatoPic from "../assets/veg/BeetRoot.jpeg";
// import TomatoPic from "../assets/veg/Tomato.jpeg";
// import BrinjalPic from "../assets/veg/Brinjal.jpeg";
// import CabbagePic from "../assets/veg/Cabbage.jpeg";
// import CucumberPic from "../assets/veg/Cucumber.jpeg";
// import OnionPic from "../assets/veg/Onion.jpeg";
// import SpinachPic from "../assets/veg/Spinach.jpeg";
// import { Link } from "react-router-dom";

// const VegetableContainer = () => {
//   const [search, setSearch] = useState("");


//   const data = [
//   { name: "Potato", description: "Fresh Potatoes", price: 40, imageURL: PotatoPic },
//   { name: "Tomato", description: "Fresh Tomatoes", price: 30, imageURL: TomatoPic },
//   { name: "Onion", description: "Fresh Onions", price: 35, imageURL: OnionPic },
//   { name: "Cucumber", description: "Orange Carrots", price: 50, imageURL: CucumberPic },
//   { name: "Brinjal", description: "Fresh Brinjal", price: 45, imageURL: BrinjalPic },
//   { name: "Cabbage", description: "Green Cabbage", price: 25, imageURL: CabbagePic },
//   { name: "Spinach", description: "Fresh Spinach", price: 20, imageURL: SpinachPic },
//   ];
   

//   const filteredVegetables = data.filter((veg) =>
//     veg.name.toLowerCase().includes(search.toLowerCase())
//   );
  


//   return (
//     <>
       
 
//         <input

//           className="search-bar"
//           type="text"  
//           placeholder="Search vegetables..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}

//         />


//       <main className="container">
//         <h1>Fresh Vegetables</h1>
//         <p>Get the best and farm-fresh vegetables every day.</p>

//         <div className="fruit-grid">
//           {filteredVegetables.map((veg, index) => (
//             <FruitCard
//               key={index}
//               name={veg.name}
//               description={veg.description}
//               price={veg.price}
//               imageURL={veg.imageURL}
//             />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };

// export default VegetableContainer;
import React, { useState } from "react";
import FruitCard from "./FruitCard";
import "./FruitContainer.css";

import PotatoPic from "../assets/veg/BeetRoot.jpeg";
import TomatoPic from "../assets/veg/Tomato.jpeg";
import BrinjalPic from "../assets/veg/Brinjal.jpeg";
import CabbagePic from "../assets/veg/Cabbage.jpeg";
import CucumberPic from "../assets/veg/Cucumber.jpeg";
import OnionPic from "../assets/veg/Onion.jpeg";
import SpinachPic from "../assets/veg/Spinach.jpeg";

const VegetableContainer = () => {
  const [search, setSearch] = useState("");

  const data = [
    { id: 301, name: "Potato", description: "Fresh Potatoes", price: 40, imageURL: PotatoPic },
    { id: 302, name: "Tomato", description: "Fresh Tomatoes", price: 30, imageURL: TomatoPic },
    { id: 303, name: "Onion", description: "Fresh Onions", price: 35, imageURL: OnionPic },
    { id: 304, name: "Cucumber", description: "Fresh Cucumber", price: 50, imageURL: CucumberPic },
    { id: 305, name: "Brinjal", description: "Fresh Brinjal", price: 45, imageURL: BrinjalPic },
    { id: 306, name: "Cabbage", description: "Green Cabbage", price: 25, imageURL: CabbagePic },
    { id: 307, name: "Spinach", description: "Fresh Spinach", price: 20, imageURL: SpinachPic },
  ];

  const filteredVegetables = data.filter((veg) =>
    veg.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search vegetables..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <main className="container">
        <h1>Fresh Vegetables</h1>
        <p>Get the best and farm-fresh vegetables every day.</p>

        <div className="fruit-grid">
          {filteredVegetables.map((veg) => (
            <FruitCard
              key={veg.id}
              id={veg.id}
              name={veg.name}
              description={veg.description}
              price={veg.price}
              imageURL={veg.imageURL}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default VegetableContainer;
