import React from "react";
import { useState } from "react";
import "./ProgressBar.css";
const ProgressBar = () => {
  const [range, setRange] = useState(0);

  const handleInputRange = (e) => {
    let range = e.target.value;
    setRange(range);
  };
  return (
    <div className="progressBar__container">
      <div className="input__container">
        {" "}
        <label htmlFor="rangeId" className="range__value">
          {range.toString().padStart(2, 0)}
        </label>
        <input
          type="range"
          min={0}
          max={100}
          onChange={handleInputRange}
          id="rangeId"
          value={range}
          className="range__field"
        />
      </div>
      <div
        className="progressbar"
        style={{
          width: `${range}%`,
          maxWidth: " 80%",
          backgroundColor: "green",
        }}
      >
        {range > 0 ? <p>{range}%</p> : ""}
      </div>
    </div>
  );
};

export default ProgressBar;
