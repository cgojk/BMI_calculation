


import React, { useState, useEffect } from "react";

export default function BmiCalculation() {

  // STATE
  const [bmi, setBmi] = useState(null);

  const [changemetricImperial, setChangeMetricImperial] = useState("metric");

  const [weightMetric, setWeightMetric] = useState("");
  const [heightMetric, setHeightMetric] = useState("");

  const [weightImperial, setWeightImperial] = useState({ stones: "", lbs: "" });
  const [heightImperial, setHeightImperial] = useState({ feet: "", inches: "" });


  // UNIT CHANGE
  function handleChange(event) {
    setChangeMetricImperial(event.target.value);
    setBmi(null); // reset result when switching units
  }


  //  LIVE BMI CALCULATION (THIS REPLACES SUBMIT)
  useEffect(() => {

    let w, h;

    // METRIC
    if (changemetricImperial === "metric") {
      w = parseFloat(weightMetric);
      h = parseFloat(heightMetric) / 100;

      if (!w || !h) {
        setBmi(null);
        return;
      }

    } 
    // IMPERIAL
    else {
      const stones = parseFloat(weightImperial.stones) || 0;
      const pounds = parseFloat(weightImperial.lbs) || 0;
      w = stones * 6.35029 + pounds * 0.453592;

      const feet = parseFloat(heightImperial.feet) || 0;
      const inches = parseFloat(heightImperial.inches) || 0;
      h = feet * 0.3048 + inches * 0.0254;

      if (!w || !h) {
        setBmi(null);
        return;
      }
    }

    const result = w / (h * h);

    if (isFinite(result)) {
      setBmi(result.toFixed(2));
    } else {
      setBmi(null);
    }

  }, [
    weightMetric,
    heightMetric,
    weightImperial,
    heightImperial,
    changemetricImperial
  ]);


  // CATEGORY FUNCTION
  function getBmiCategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 25) return "Healthy weight";
    else if (bmi < 30) return "Overweight";
    else return "Obese";
  }


  // UI
  return (
<div className="bmi-calculation">

<h2 className="bmi-title">Enter your details below</h2>

  <div className="bmi-form ">

        {/* UNIT */}
      <div className="metric_imperial_choice">
          <label>
            <input
              type="radio"
              name="unit"
              value="metric"
              checked={changemetricImperial === "metric"}
              onChange={handleChange}
            />
            Metric
          </label>

          <label>
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

        {/* WEIGHT */}
    <div className="form-group">
          <label>Weight:</label>
          {changemetricImperial === "metric" ? (
            <div className="input-with-unit">
                <input
                type="number"
                value={weightMetric}
                onChange={(e) => setWeightMetric(e.target.value)}
               />
              <span className="unit">kg</span>
           </div>

          ) : (
            <>
          <div className="imperial-weight-wrapper">
            <div className="input-with-unit__imperial">
                <input
                type="number"
                value={weightImperial.stones}
                onChange={(e) =>
                  setWeightImperial({ ...weightImperial, stones: e.target.value })
                }
                 />
                 <span className="unit">st</span>
              </div>

              <div className="input-with-unit__imperial">
              <input
                type="number"
                value={weightImperial.lbs}
                onChange={(e) =>
                  setWeightImperial({ ...weightImperial, lbs: e.target.value })
                }
               
              />
              <span className="unit">lbs</span>
            </div>
          </div>
         </>
          )}

      </div>
      


      

        {/* HEIGHT */}
        <div className="form-group">
          <label>Height:</label>

          {changemetricImperial === "metric" ? (
            <div className="input-with-unit">

            <input
              type="number"
              value={heightMetric}
              onChange={(e) => setHeightMetric(e.target.value)}
              
            />
            <span className="unit">cm</span>
            </div>
          ) : (
            <>
            <div className="imperial-height-wrapper">
              <div className="input-with-unit__imperial">
                <input
                  type="number"
                  value={heightImperial.feet}
                  onChange={(e) =>
                    setHeightImperial({ ...heightImperial, feet: e.target.value })
                  }
            
                />
                <span className="unit">ft</span>
              </div>
                
              <div className="input-with-unit__imperial">
                <input
                  type="number"
                  value={heightImperial.inches}
                  onChange={(e) =>
                    setHeightImperial({ ...heightImperial, inches: e.target.value })
                  }
                 
                />
                <span className="unit">in</span>
              </div>      
            </div>
            </>
            )}
         
        </div>

      </div>

   {bmi === null ? (
  <div className="empthy__card">
    <h3 className="title__card">Welcome!</h3>
    <p className="info__card">Enter your height and weight and you will see your BMI results here</p>
  </div>
) : (
  <div className="bmi-result">
    <p>Your BMI is...</p>
    <p className="result__value">{bmi}</p>
    <div className="result__category">
      <p>
        Your BMI suggests you are <strong>{getBmiCategory(bmi)}</strong>
      </p>
    </div>
  </div>
)}

    </div>
  );
}




























          