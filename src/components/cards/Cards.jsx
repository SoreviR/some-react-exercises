import React from "react";
import VisaIcon from "../../assets/icons/visa-icon.png";
import MastercardIcon from "../../assets/icons/mastercard-icon.png";

const Cards = (props) => {
  //----------- ICONO ---------------
  let imgSrc = "";
  let imgClass = "";
  if (props.type === "visa") {
    imgSrc = VisaIcon;
    imgClass = "h-8 self-end";
  } else {
    imgSrc = MastercardIcon;
    imgClass = "h-8 self-end";
  }

  //---------- CARD NUMBER -----------
  let numero = props.number;
  numero = "---- ---- ---- " + numero.slice(12, 16);

  //---------- CARD CLASS -----------
  let classCard = "";

  if (props.cssClass === "blue") {
    classCard = " bg-[#4DA799] text-white";
  } else if (props.cssClass === "white") {
    classCard = " bg-[#EEEEEE] text-black";
  } else {
    classCard = " bg-[#D8BB65] text-white";
  }

  return (
    <div
      className={
        "flex flex-col gap-6 rounded-lg p-4 shadow w-[350px] h-[200px]" +
        classCard
      }
    >
      <img className={imgClass} src={imgSrc} alt="" />
      <p className="text-2xl self-center flex items-center">{numero}</p>
      <div>
        <div className="flex gap-4">
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
          </p>
          <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};
export default Cards;
