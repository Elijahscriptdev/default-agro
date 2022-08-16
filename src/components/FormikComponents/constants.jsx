import React from "react";

export const SecondText = ({ value }) => {
  return (
    <div>
      <h2 className="second-text my-4">{value}</h2>
    </div>
  );
};

export const FirstText = ({ value }) => {
  return (
    <div>
      <h1 className="first-text mt-7">{value}</h1>
    </div>
  );
};
