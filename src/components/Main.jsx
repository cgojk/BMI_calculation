import React, { useRef, useEffect } from "react";
import Articlesection from "./Articlesection";
// import Lastsection from "./Lastsection";
import Middlesection from "./Middlesection";
import Lasticons from "./LastIcons";
// import BmiCalculation from "./BmiCalculation";


export default function Main(){
    return (

    <main class="main-content">
       
      {/* <BmiCalculation/> */}
       <Articlesection/>
       <Middlesection/>
       {/* <Lastsection/> */}
       <Lasticons/>

     
                    



           
      </main>
  );
}