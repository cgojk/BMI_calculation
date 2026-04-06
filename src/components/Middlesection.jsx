import React from "react";

import IconsFirstElements from "../IconsFirstElements";
import Iconwrapper from "./Iconwrapper";



export default function Middlesection(){

  const iconElements = IconsFirstElements.map((icon) => {
    return (
      <Iconwrapper
        key={icon.id}
        variant="middle"
        // {...icon} // Spread the properties of the icon object as props to Iconwrapper
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
    


















//         <section
//         <>

// export default function Middlesection(){
//     return (
//         <>
//         <Iconwrapper
//             sectionTitle="Healthy eating"
//             imageSrc={IconsFirstElements[0].imageSrc}
//             imageAlt={IconsFirstElements[0].imageAlt}
//             text={IconsFirstElements[0].text}
             

//         />
//          <Iconwrapper
//             sectionTitle="Regular exercise"
//             imageSrc={exerciseIcon}
//             imageAlt="icon of weights"
//             text="Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity."

             

//         />
//          <Iconwrapper
//             sectionTitle="Adequate sleep"
//             imageSrc={sleepIcon}
//             imageAlt="icon of a moon and stars"
//             text="Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."

             



//         />
         


//         </>
        


       


     
//     );
// }