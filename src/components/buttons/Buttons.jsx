import React from "react";

const Buttons = ({ number }) => {
  let bgButton = "";

  if (number % 2 === 0) {
    bgButton = " bg-[#21BF73]";
  } else if (number % 2 !== 0) {
    bgButton = " bg-[#FDDB3A]";
  }

  function esPrimo(number) {
    if (number <= 1) {
      return false;
    }
    // Comprobamos si el número es divisible por algún número menor que él mismo
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    } // Si no ha sido divisible por ningún número, es primo return true;
    return (bgButton = " bg-red-500");
  }
  esPrimo(number);

  const buttonClick = (num) => {
    console.log(num);
  };

  return (
    <button
      onClick={() => buttonClick(number)}
      className={
        "buttons-number w-20 h-20 text-2xl  hover:bg-black font-semibold text-white" +
        bgButton
      }
    >
      {number}
    </button>
  );
};

export default Buttons;
