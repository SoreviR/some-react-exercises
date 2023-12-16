import React from "react";
import ChartBar from "../chart-bar/ChartBar";

const Chart = ({ populationData }) => {
  const worldPopulation = populationData[0].population;
  // world es el 100% los demas serian la relacion
  const worldWidth = 500;
  // si 7millones es el 100% y son 500px
  // x country es igual a

  return (
    <div className="flex flex-col gap-2">
      {populationData.map((country, i) => {
        const porcentaje = (country.population * 100) / worldPopulation;
        const countryPixel = (porcentaje * worldWidth) / 100;
        return <ChartBar key={i} barWidth={countryPixel} />;
      })}
    </div>
  );
};

export default Chart;
