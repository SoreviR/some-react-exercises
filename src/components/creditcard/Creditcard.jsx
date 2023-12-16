import React from "react";
import Cards from "../cards/Cards";

const Creditcard = () => {
  const cardArrayInfo = [
    {
      type: "visa",
      number: "1234123412341234",
      expirationMonth: "03",
      expirationYear: "27",
      bank: "BNP",
      owner: "Roberto Riveros",
      cssClass: "blue",
    },
    {
      type: "mastercard",
      number: "1234123412341234",
      expirationMonth: "12",
      expirationYear: "26",
      bank: "Caixa",
      owner: "Pablo Aimar",
      cssClass: "white",
    },
    {
      type: "visa",
      number: "1234123412341234",
      expirationMonth: "25",
      expirationYear: "30",
      bank: "BBVA",
      owner: "Hayley Williams",
      cssClass: "yellow",
    },
  ];

  return (
    <div className="flex justify-center p-16 gap-4">
      {cardArrayInfo.map((card, i) => {
        return (
          <Cards
            key={i}
            type={card.type}
            number={card.number}
            expirationMonth={card.expirationMonth}
            expirationYear={card.expirationYear}
            bank={card.bank}
            owner={card.owner}
            cssClass={card.cssClass}
          />
        );
      })}
    </div>
  );
};

export default Creditcard;
