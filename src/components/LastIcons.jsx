import React from "react";
import IconsElement from "../IconsElements.js";
import Iconwrapper from "./Iconwrapper.jsx";



export default function Lasticons(){

  const iconElements = IconsElement.map((icon, index) => {
    return (
      <Iconwrapper
        key={icon.id}
        variant="last"
        customClass={`card-${index + 1}`}
        // {...icon} // Spread the properties of the icon object as props to Iconwrapper
        sectionTitle={icon.sectionTitle}
        imageSrc={icon.imageSrc}
        imageAlt={icon.imageAlt}
        text={icon.text}
      />
    );
  });

  return (
    <section className="article-section__second container">
      
      <div className="article-section__second-wrapper">
        <h2 className="article-section-title__second">
          Limitations of BMI
        </h2>
        <p className="article-section-description__second">
          Although BMI is often a practical indicator of healthy weight, 
          it is not suited for every person. Specific groups 
          should carefully consider their BMI outcomes, and in 
          certain cases, the measurement may not be beneficial to use.
        </p>
      </div>
     <div className="last-grid ">
      {iconElements}
      </div>

    </section>
  );
}
