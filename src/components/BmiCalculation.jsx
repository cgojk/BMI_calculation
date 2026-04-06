import React, { useState, useEffect } from "react";

export default function BmiCalculation() {

  //  STATE

  const [bmi, setBmi] = useState(null); 
  // stores the BMI result

  const [changemetricImperial, setChangeMetricImperial] = useState("metric");
  // initial state is set to metric because the metric option is checked by default
  // this state keeps track of what unit the user selects (metric or imperial)

  const [errors, setErrors] = useState({ weight: "", height: "" });
  // this state stores validation errors for weight and height

// metric inputs
const [weightMetric, setWeightMetric] = useState("");
const [heightMetric, setHeightMetric] = useState("");

// // imperial
const [weightImperial, setWeightImperial] = useState({stones:"", lbs:""});
const [heightImperial, setHeightImperial] = useState({feet:"", inches:""});

  //  DEBUGGING

  useEffect(() => {
    console.log("Updated errors state:", errors);
  }, [errors]);
  // logs errors whenever they change so we can see updated values

  useEffect(() => {
    console.log("checking for the state if metric or imperial:", changemetricImperial);
  }, [changemetricImperial]);
  // logs unit changes to confirm state is updating correctly


  //  HANDLE UNIT CHANGE

  function handleChange(event) {

    setChangeMetricImperial(event.target.value);
    // updates the unit based on user selection (metric or imperial)

    setBmi(null); 
    // reset BMI result when user switches units

    setErrors({ weight: "", height: "" });
    // clear any existing errors when switching units



    console.log("Selected unit:", event.target.value);
  }


  //  HANDLE FORM SUBMIT

  function handleSubmit(event) {

    event.preventDefault();
    

    // VALIDATION
  
    // final weight and height

    let newErrors = { weight: "", height: "" };
    let w, h;

    if (changemetricImperial ==="metric"){

        w=parseFloat(weightMetric);
        h=parseFloat(heightMetric)/100; // convert cm to m for metric calculation
        if (!w) newErrors.weight = "Please enter your weight";
        if(!h)  newErrors.height = "Please enter your height";

    }else if(changemetricImperial === "imperial"){
        // in case the user select imperial units we need to check if they have entered weight in either stones or pounds, and height in either feet or inches. If both fields for weight or height are empty, then show an error message.
        // checkign here if the user has entered weight in either stones or pounds, and height in either feet or inches. If both fields for weight or height are empty, then show an error message.
            // Convert stones + pounds → kg
            const stones = parseFloat(weightImperial.stones) || 0;
            // the parseFloat function converts the input value to a number. If the input is empty or not a valid number, it returns NaN. The || 0 part ensures that if parseFloat returns NaN (which is falsy), 
            // we default to 0 for the calculation.
            const pounds = parseFloat(weightImperial.lbs) || 0;
            w = stones * 6.35029 + pounds * 0.453592;

            // Convert feet + inches → meters
            const feet = parseFloat(heightImperial.feet) || 0;
            const inch = parseFloat(heightImperial.inches) || 0;
            h = feet * 0.3048 + inch * 0.0254;

             if (stones === 0 && pounds === 0) newErrors.weight = "Please enter your weight";
            if (feet === 0 && inch === 0) newErrors.height = "Please enter your height";


    }

   

  

    setErrors(newErrors);
    // update error state

    console.log("Errors:", newErrors);
    console.log("After setErrors (still old state!):", errors);
    // shows that state updates are asynchronous


    // CALCULATION only to do if no erors are present (both weight and height must be provided)

    if(!newErrors.weight && !newErrors.height) {
      const calculatedBmi = w/(h**2);

    
        

    // if (weight && height) {

    //   let calculatedBmi =
    //     unit === "metric"
    //       ? weight / ((height / 100) ** 2)
    //       : (weight / (height ** 2)) * 703;

      setBmi(calculatedBmi.toFixed(2));
      // store BMI rounded to 2 decimals


      //  RESET INPUTS
      // Reset all inputs
      setWeightMetric(""); 
      setHeightMetric(""); 
      setWeightImperial({ stones: "", lbs: "" }); 
      setHeightImperial({ feet: "", inches: "" });

    //   event.target.reset();
      // clears the form inputs after submission
    }
  }


  //  BMI CATEGORY FUNCTION

 

  function getBmiCategory(bmi) {

    if (bmi < 18.5) {
      return "Underweight";
    } 
    else if (bmi >= 18.5 && bmi < 25) {
      return "Healthy weight";
    } 
    else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } 
    else {
      return "Obese";
    }
  }

console.log("HEIGHT STATE:", heightImperial);
console.log("WEIGHT STATE:", weightImperial);

  //  UI

  return (
    <section className="bmi-calculation">

      <h2 className="bmi-title">Enter your details below</h2>


      <form className="bmi-form" onSubmit={handleSubmit}>

        {/*  UNIT SELECTION */}
        <div className="metric_imperial_choice">

          <label className="radio_metric">
            <input
              type="radio"
              name="unit"
              value="metric"
              checked={changemetricImperial === "metric"}
              onChange={handleChange}
            />
            Metric 
          </label>

          <label className="radio_imperial">
            <input
              type="radio"
              name="unit"
              value="imperial"
              checked={changemetricImperial === "imperial"}
              onChange={handleChange}
            />
            Imperial 
          </label>

        </div>



        {/*  WEIGHT INPUT */}
        <div className="form-group">

          <label className="label_weight_metric" >Weight: </label>
          {changemetricImperial === "metric" ? (
            <div className="metric-input-wrapper">
            <input
              type="number"
              id="weight"
              value={weightMetric}
                onChange={(e) => setWeightMetric(e.target.value)
                
                }
                    placeholder="kg"
                
            />
            </div>
          ) : (
            <div className="imperial-weight-inputs">
                <input
                    type="number"
                    id="weight-stones"
                    value={weightImperial.stones}
                    onChange={(e) => setWeightImperial({ ...weightImperial, stones: e.target.value })}
                    
                    placeholder="Stones"
                    />
                <input
                    type="number"
                    id="weight-pounds"
                    value={weightImperial.lbs}
                    onChange={(e) => setWeightImperial({ ...weightImperial, lbs: e.target.value })}
                    placeholder="Pounds"
                    />
             </div>

           ) }

    
         
          {errors.weight && (
            <p className="error">{errors.weight}</p>
          )}

        </div>


        {/*  HEIGHT INPUT */}
        <div className="form-group">

          <label className="label_height_metric">Height: </label>

            {changemetricImperial === "metric" ?
                (
                    <div className="metric-input-wrapper">
                    <input
                        type="number"
                        id="height"
                        value={heightMetric}
                        onChange={(e) => setHeightMetric(e.target.value)}
                        placeholder="cm"
                        />
                    </div>
                ) : (
                    <div className="imperial-height-inputs">
                        <input
                            type="number"
                            id="height-feet"
                            value={heightImperial.feet}
                            onChange={(e) => setHeightImperial({ ...heightImperial, feet: e.target.value })}
                            placeholder=" feet"
                        />
                        <input
                            type="number"
                            id="height-inches"
                            value={heightImperial.inches}
                            onChange={(e) => setHeightImperial({ ...heightImperial, inches: e.target.value })}
                            placeholder="inches"
                        />
                    </div>
                )}
  
          {errors.height && (
            <p className="error">{errors.height}</p>
          )}

        </div>


        <button className="button_calculation" type="submit">Calculate BMI</button>

      </form>


      {/*  RESULT DISPLAY */}
   {bmi && (
        <div className="bmi-result"> 
           
            <p className="bmi-result-value">
              Your BMI is: <span>{bmi}</span>
            </p>

            <p>
              Category: <span>{bmi && getBmiCategory(bmi)}</span>
            </p>
         </div>
      
      )}
     

    </section>
  );
}