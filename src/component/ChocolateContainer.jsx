// import React, { useState } from "react";
// import FruitCard from "./FruitCard"; 
// //import "./FruitCard.css";
// import "./Home.css";
// import star5 from "../assets/Chocolate/5star.jpeg";
// import dairyMilk from "../assets/Chocolate/DairyMilk.jpeg";
// import gems from "../assets/Chocolate/Gems.webp";
// import glaxy from "../assets/Chocolate/Glaxy.webp";
// import happyBD from "../assets/Chocolate/HappyBirthDay.webp";
// import kinderJoy from "../assets/Chocolate/KinderJoy.webp";
// import pureChocolate from "../assets/Chocolate/PureChocolate.jpeg";
// import snickers from "../assets/Chocolate/Snickers.webp";
// import { Link } from "react-router-dom";

// const ChocolateContainer = () => {
//   const [search, setSearch] = useState("");

//   const chocolates = [
//     { name: "5 Star", description: "Caramel chocolate bar", price: 20, imageURL: star5 },
//     { name: "Dairy Milk", description: "Creamy milk chocolate", price: 50, imageURL: dairyMilk },
//     { name: "Gems", description: "Colorful choco drops", price: 10, imageURL: gems },
//     { name: "Galaxy", description: "Smooth premium chocolate", price: 70, imageURL: glaxy },
//     { name: "Happy Birthday Chocolate", description: "Gift chocolate bar", price: 120, imageURL: happyBD },
//     { name: "Kinder Joy", description: "Chocolate with toy surprise", price: 40, imageURL: kinderJoy },
//     { name: "Pure Chocolate", description: "Rich dark chocolate", price: 90, imageURL: pureChocolate },
//     { name: "Snickers", description: "Chocolate with nuts & caramel", price: 40, imageURL: snickers },
//   ];

//   const filteredData = chocolates.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//        {/* <header className="header"> */}
      
      
//         <input
//           className="search-bar"
//           type="text"
//           placeholder="Search chocolates..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       {/* </header> */}

//       <main className="container">
//         <h1>Chocolate Store 🍫</h1>
//         <p>Premium chocolates available here.</p>

//         <div className="fruit-grid">
//           {filteredData.map((item, index) => (
//             <FruitCard
//               key={index}
//               name={item.name}
//               description={item.description}
//               price={item.price}
//               imageURL={item.imageURL}
//             />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };

// export default ChocolateContainer;
import React, { useState } from "react";
import FruitCard from "./FruitCard";
import "./Home.css";
import star5 from "../assets/Chocolate/5star.jpeg";
import dairyMilk from "../assets/Chocolate/DairyMilk.jpeg";
import gems from "../assets/Chocolate/Gems.webp";
import glaxy from "../assets/Chocolate/Glaxy.webp";
import happyBD from "../assets/Chocolate/HappyBirthDay.webp";
import kinderJoy from "../assets/Chocolate/KinderJoy.webp";
import pureChocolate from "../assets/Chocolate/PureChocolate.jpeg";
import snickers from "../assets/Chocolate/Snickers.webp";

const ChocolateContainer = () => {
  const [search, setSearch] = useState("");

  const chocolates = [
    { id: 101, name: "5 Star", description: "Caramel chocolate bar", price: 20, imageURL: star5 },
    { id: 102, name: "Dairy Milk", description: "Creamy milk chocolate", price: 50, imageURL: dairyMilk },
    { id: 103, name: "Gems", description: "Colorful choco drops", price: 10, imageURL: gems },
    { id: 104, name: "Galaxy", description: "Smooth premium chocolate", price: 70, imageURL: glaxy },
    { id: 105, name: "Happy Birthday Chocolate", description: "Gift chocolate bar", price: 120, imageURL: happyBD },
    { id: 106, name: "Kinder Joy", description: "Chocolate with toy surprise", price: 40, imageURL: kinderJoy },
    { id: 107, name: "Pure Chocolate", description: "Rich dark chocolate", price: 90, imageURL: pureChocolate },
    { id: 108, name: "Snickers", description: "Chocolate with nuts & caramel", price: 40, imageURL: snickers },
  ];

  const filteredData = chocolates.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search chocolates..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <main className="container">
        <h1>Chocolate Store 🍫</h1>
        <p>Premium chocolates available here.</p>

        <div className="fruit-grid">
          {filteredData.map((item) => (
            <FruitCard
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              imageURL={item.imageURL}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default ChocolateContainer;
