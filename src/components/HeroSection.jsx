import React, { useRef, useEffect } from "react";


import image from "../assets/logo.svg"


export default function HeroSection(){
    return (
    <header className="hero">
     

      <div className="container hero-flex">
        <div className="hero-content">
            <img src={image} className="logo_hero" alt="logo" />
            <h1 className="title_hero">Body Mass Index Calculator</h1>
            <p className="hero_text">
            Better understand your weight in relation to your height using
                our body mass index (BM) calculator. While BMI is not the
                sole determinant of a healthy weight, it offers a valuable
                starting point to evaluate your overall health and well-being.
            </p>
         </div>
          
    </div>
  
</header>
  );
}