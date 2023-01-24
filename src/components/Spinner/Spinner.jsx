import React from "react";

const Spinner = () => {
  const spin = Array.from({ length: 10 }, (v, i) => i);
  return (
    <div className="spinner-container">
      {spin.map((s, index) => (
        <div className="container" key={index}>
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default Spinner;
