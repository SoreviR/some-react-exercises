import React from "react";
import Buttons from "../buttons/Buttons.jsx";

const ButtonList = ({ bottonsQuantity }) => {
  const arrayNums = [];
  for (let i = 0; i <= bottonsQuantity; i++) {
    arrayNums.push(i);
  }

  return (
    <div className="flex gap-1 flex-wrap pt-8 pb-8 justify-center w-[700px]">
      {arrayNums.map((num, i) => {
        return <Buttons key={i} number={num} />;
      })}
    </div>
  );
};

export default ButtonList;
