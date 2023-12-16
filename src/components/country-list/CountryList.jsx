import React from "react";

const CountryList = ({ populationData }) => {
  return (
    <div className="flex flex-col gap-2 ">
      {populationData.map((country, i) => {
        return (
          <p className="text-sm font-semibold h-5" key={i}>
            {country.country}
          </p>
        );
      })}
    </div>
  );
};

export default CountryList;
