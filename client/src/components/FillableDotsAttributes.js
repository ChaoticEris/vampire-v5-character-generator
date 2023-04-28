import React, { useState } from "react";

function FillableDotsAttributes({ label }) {
  const [selectedDot, setSelectedDot] = useState(1);

  const handleDotClick = (dotNumber) => {
    setSelectedDot(dotNumber);
  };

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      const dotClass = i <= selectedDot ? "filled" : "";

      dots.push(
        <span
          key={i}
          className={`dot ${dotClass}`}
          onClick={() => handleDotClick(i)}
        ></span>
      );
    }

    return dots;
  };

  return (
    <div className={"dots-container"}>
      <label htmlFor={label} className={"attributes-label"}>
        {label}
      </label>
      {renderDots()}
    </div>
  );
}

export default FillableDotsAttributes;
