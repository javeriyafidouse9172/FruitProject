
import React, { useState } from "react";
import FruitCard from "./FruitCard";
import './FruitContainer.css'

import ApplePic from "../assets/Apple.jpeg";
import BananaPic from "../assets/Banana.jpeg";
import ChickooPic from "../assets/Chickoo.jpeg";
import GrapesPic from "../assets/grapes.jpeg";
import GuavaPic from "../assets/Guava.jpeg";
import MangoPic from "../assets/Mango.jpeg";
import CherryPic from "../assets/cherry.jpeg";
import DragonPic from "../assets/Dragon.jpeg";
import GreenMangoPic from "../assets/GreenMango.jpeg";
import KiwiPic from "../assets/kiwi.jpeg";
import OrangePic from "../assets/orange.jpeg";
import StrawberryPic from "../assets/strawberr.jpg";

const FruitContener = () => {
  const [search, setSearch] = useState("");

  const data = [
    { id: 1, name: "Apple", description: "Fresh red apples", price: 90, imageURL: ApplePic },
    { id: 2, name: "Banana", description: "Fresh Banana", price: 40, imageURL: BananaPic },
    { id: 3, name: "Chickoo", description: "Fresh Chickoo", price: 60, imageURL: ChickooPic },
    { id: 4, name: "Grapes", description: "Fresh Grapes", price: 70, imageURL: GrapesPic },
    { id: 5, name: "Guava", description: "Fresh Green Guava", price: 90, imageURL: GuavaPic },
    { id: 6, name: "Mango", description: "Fresh Mango", price: 100, imageURL: MangoPic },
    { id: 7, name: "Cherry", description: "Fresh Cherry", price: 70, imageURL: CherryPic },
    { id: 8, name: "Dragon", description: "Fresh Dragon", price: 80, imageURL: DragonPic },
    { id: 9, name: "Green Mango", description: "Fresh Green Mango", price: 70, imageURL: GreenMangoPic },
    { id: 10, name: "Kiwi", description: "Fresh Kiwi", price: 120, imageURL: KiwiPic },
    { id: 11, name: "Orange", description: "Fresh Orange", price: 60, imageURL: OrangePic },
    { id: 12, name: "Strawberry", description: "Fresh Strawberry", price: 90, imageURL: StrawberryPic },
  ];

  const filteredFruits = data.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="search-bar"
        type="text"
        placeholder="Search fruits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <main className="container">
        <h1>Welcome to Grocery Store</h1>
        <p>Your one-stop shop for fresh and quality groceries.</p>

        <div className="fruit-grid">
          {filteredFruits.map((fruit) => (
            <FruitCard
              key={fruit.id}
              id={fruit.id}
              name={fruit.name}
              description={fruit.description}
              price={fruit.price}
              imageURL={fruit.imageURL}
            />
          ))}
        </div>
      </main>
    </>
  );
};
export default FruitContener;



