import React from "react";

const TitleLine = ({ numEjercicio }) => {
  return (
    <div className="flex flex-col w-full gap-2 items-center">
      <div className="h-2 bg-slate-300 w-full"></div>
      <h2 className="text-lg font-semibold">Ejercicio {numEjercicio}:</h2>
    </div>
  );
};

export default TitleLine;
