import React from "react";

const Population = ({ populationData }) => {
  return (
    <div className="flex flex-col gap-2 w-auto">
      {populationData.map((country, i) => {
        return (
          <p className="text-sm font-semibold h-5" key={i}>
            {country.population}
          </p>
        );
      })}
    </div>
  );
};

export default Population;
