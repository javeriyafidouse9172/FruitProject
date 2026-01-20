
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import MySlider from "./MySlider";

// 🌟 Slider Banner Images
import banner1 from "../assets/home/bannerFruits.jpeg";
import banner2 from "../assets/home/bannerVeg.jpeg";
import banner3 from "../assets/home/bannerChoc.jpeg";
import banner4 from "../assets/home/bannerSnacks.jpeg";
import banner5 from "../assets/home/bannerIce.jpeg";

// 🛒 Category Images
import FruitsImg from "../assets/home/fruits.jpeg";
import VegImg from "../assets/home/vegetables.jpeg";
import ChocoImg from "../assets/home/chocolates.jpeg";
import SnacksImg from "../assets/home/snacks.jpeg";
import IceCreamImg from "../assets/home/icecream.jpeg";

const Home = () => {
  // 📌 Slider Data (NO REPEAT)
  const slides = [
    { id: 1, img: banner1, title: "Fresh Fruits Sale 🍎", subtitle: "Up to 40% OFF" },
    { id: 2, img: banner2, title: "Organic Vegetables 🥕", subtitle: "Fresh from Farm" },
    { id: 3, img: banner3, title: "Premium Chocolates 🍫", subtitle: "Buy 1 Get 1" },
    { id: 4, img: banner4, title: "Tasty Snacks 🍟", subtitle: "Best Party Collection" },
    { id: 5, img: banner5, title: "Ice Cream Heaven 🍦", subtitle: "Cool Your Summer" },
  ];

  // 📌 Category Cards Data
  const categoryData = [
    { name: "Fresh Fruits", desc: "Assorted fresh fruits", img: FruitsImg, link: "/fruits" },
    { name: "Fresh Vegetables", desc: "Assorted fresh vegetables", img: VegImg, link: "/vegetable" },
    { name: "Chocolates", desc: "Assorted chocolates", img: ChocoImg, link: "/chocolate" },
    { name: "Snacks", desc: "Assorted snacks", img: SnacksImg, link: "/snacks" },
    { name: "Ice-Cream", desc: "Delicious ice-creams", img: IceCreamImg, link: "/ice-cream" },
  ];

  return (
    <div className="home-container">

      {/* 🟢 Banner */}
      <section className="banner">
        <h1>Welcome to Grocery Store</h1>
        <p>Your one-stop shop for fresh and quality groceries.</p>
      </section>

      {/* 🔥 Slider */}
      <div className="slider-wrapper">
        <MySlider slides={slides} />
      </div>

      {/* 🛒 Categories */}
      <div className="cards">
        {categoryData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>

            <Link to={item.link} className="shop-btn">
              Shop now
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
