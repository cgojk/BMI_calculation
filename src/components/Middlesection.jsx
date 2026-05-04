import React from "react";

import IconsFirstElements from "../IconsFirstElements";
import Iconwrapper from "./Iconwrapper";



export default function Middlesection(){

  const iconElements = IconsFirstElements.map((icon) => {
    return (
      <Iconwrapper
        key={icon.id}
        variant="middle"
        sectionTitle={icon.sectionTitle}
        imageSrc={icon.imageSrc}
        imageAlt={icon.imageAlt}
        text={icon.text}
      />
    );
  });

  return (
    <div className="middle-grid ">
      {iconElements}
    </div>
  );
}
    













