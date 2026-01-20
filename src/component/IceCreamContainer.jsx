// import React, { useState } from "react";
// import FruitCard from "./FruitCard";
// import "./FruitContainer.css";


// import Blueberry from "../assets/Ice-cream/Blueberry.jpeg";
// import ButterscotchCup from "../assets/Ice-cream/ButterscotchCup.jpeg";
// import ChocoBar from "../assets/Ice-cream/ChocoBar.jpeg";
// import ChocolateCone from "../assets/Ice-cream/ChocolateCone.jpeg";
// import ConeIceCream from "../assets/Ice-cream/ConeIceCream.jpeg";
// import DryFruitIceCream from "../assets/Ice-cream/DryFruitIceCream.jpeg";
// import IceCandy from "../assets/Ice-cream/IceCandy.jpeg";
// import Kulfi from "../assets/Ice-cream/Kulfi.jpeg";
// import MangoBar from "../assets/Ice-cream/MangoBar.jpeg";
// import OreoIceCream from "../assets/Ice-cream/OreoIceCream.jpeg";
// import StrawberryCone from "../assets/Ice-cream/StrawberryCone.jpeg";
// import VanillaCup from "../assets/Ice-cream/VanillaCup.jpeg";

// import { Link } from "react-router-dom";

// const IceCreamContainer = () => {
//   const [search, setSearch] = useState("");
//       const iceCreamData = [
//     { name: "Choco Bar", description: "Delicious chocolate ice cream", price: 40, imageURL: ChocoBar },
//     { name: "Vanilla Cup", description: "Classic vanilla ice cream", price: 25, imageURL: VanillaCup },
//     { name: "Strawberry Cone", description: "Fresh strawberry flavor", price: 35, imageURL: StrawberryCone },
//     { name: "Mango Bar", description: "Sweet mango ice cream", price: 30, imageURL: MangoBar },
//     { name: "Kulfi", description: "Traditional Indian kulfi", price: 50, imageURL: Kulfi },
//     { name: "Oreo Ice Cream", description: "Crunchy Oreo flavor", price: 60, imageURL: OreoIceCream },
//     { name: "Chocolate Cone", description: "Rich chocolate ice cream", price: 40, imageURL: ChocolateCone },
//     { name: "Butterscotch Cup", description: "Butterscotch with nuts", price: 35, imageURL: ButterscotchCup },
//     { name: "Cone Ice Cream", description: "Crispy cone with ice cream", price: 30, imageURL: ConeIceCream },
//     { name: "Ice Candy", description: "Colorful ice candy", price: 20, imageURL: IceCandy },
//     { name: "Blueberry Ice Cream", description: "Fresh blueberry flavor", price: 45, imageURL: Blueberry },
//     { name: "Dry Fruit Ice Cream", description: "Premium dry fruit ice cream", price: 70, imageURL: DryFruitIceCream },
//   ];



//   const filteredIceCreams = iceCreamData.filter((ice) =>
//     ice.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>


       

//         <input
//           className="search-bar"
//           type="text"
//           placeholder="Search ice-cream..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />



//       <main className="container">
//         <h1>Welcome to Ice-Cream Store</h1>
//         <p>Enjoy the best and most delicious ice-creams!</p>

//         <div className="fruit-grid">
//           {filteredIceCreams.map((ice, index) => (
//             <FruitCard
//               key={index}
//               name={ice.name}
//               description={ice.description}
//               price={ice.price}
//               imageURL={ice.imageURL}
//             />
//           ))}
//         </div>
//       </main>
//     </>
//   );
// };

// export default IceCreamContainer;
import React, { useState } from "react";
import FruitCard from "./FruitCard";
import "./FruitContainer.css";

// IMAGES
import Blueberry from "../assets/Ice-cream/Blueberry.jpeg";
import ButterscotchCup from "../assets/Ice-cream/ButterscotchCup.jpeg";
import ChocoBar from "../assets/Ice-cream/ChocoBar.jpeg";
import ChocolateCone from "../assets/Ice-cream/ChocolateCone.jpeg";
import ConeIceCream from "../assets/Ice-cream/ConeIceCream.jpeg";
import DryFruitIceCream from "../assets/Ice-cream/DryFruitIceCream.jpeg";
import IceCandy from "../assets/Ice-cream/IceCandy.jpeg";
import Kulfi from "../assets/Ice-cream/Kulfi.jpeg";
import MangoBar from "../assets/Ice-cream/MangoBar.jpeg";
import OreoIceCream from "../assets/Ice-cream/OreoIceCream.jpeg";
import StrawberryCone from "../assets/Ice-cream/StrawberryCone.jpeg";
import VanillaCup from "../assets/Ice-cream/VanillaCup.jpeg";

const IceCreamContainer = () => {
  const [search, setSearch] = useState("");

  const iceCreamData = [
    { id: 401, name: "Choco Bar", description: "Delicious chocolate ice cream", price: 40, imageURL: ChocoBar },
    { id: 402, name: "Vanilla Cup", description: "Classic vanilla ice cream", price: 25, imageURL: VanillaCup },
    { id: 403, name: "Strawberry Cone", description: "Fresh strawberry flavor", price: 35, imageURL: StrawberryCone },
    { id: 404, name: "Mango Bar", description: "Sweet mango ice cream", price: 30, imageURL: MangoBar },
    { id: 405, name: "Kulfi", description: "Traditional Indian kulfi", price: 50, imageURL: Kulfi },
    { id: 406, name: "Oreo Ice Cream", description: "Crunchy Oreo flavor", price: 60, imageURL: OreoIceCream },
    { id: 407, name: "Chocolate Cone", description: "Rich chocolate ice cream", price: 40, imageURL: ChocolateCone },
    { id: 408, name: "Butterscotch Cup", description: "Butterscotch with nuts", price: 35, imageURL: ButterscotchCup },
    { id: 409, name: "Cone Ice Cream", description: "Crispy cone with ice cream", price: 30, imageURL: ConeIceCream },
    { id: 410, name: "Ice Candy", description: "Colorful ice candy", price: 20, imageURL: IceCandy },
    { id: 411, name: "Blueberry Ice Cream", description: "Fresh blueberry flavor", price: 45, imageURL: Blueberry },
    { id: 412, name: "Dry Fruit Ice Cream", description: "Premium dry fruit ice cream", price: 70, imageURL: DryFruitIceCream },
  ];

  const filteredIceCreams = iceCreamData.filter((ice) =>
    ice.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search ice-cream..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <main className="container">
        <h1>Welcome to Ice-Cream Store</h1>
        <p>Enjoy the best and most delicious ice-creams!</p>

        <div className="fruit-grid">
          {filteredIceCreams.map((ice) => (
            <FruitCard
              key={ice.id}
              id={ice.id}
              name={ice.name}
              description={ice.description}
              price={ice.price}
              imageURL={ice.imageURL}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default IceCreamContainer;
