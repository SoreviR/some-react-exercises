import React from "react";
import { populationData } from "../../population-data";
import CountryList from "../country-list/CountryList";
import Population from "../population/Population";
import Chart from "../chart/Chart";

const WorldPopulation = () => {
  return (
    <section className="flex flex-col items-center w-3/4 gap-2">
      <h2 className="text-2xl">World Population</h2>
      <p className="text-sm">Ten most populated contries</p>
      <div className="flex gap-2 p-4  justify-center">
        <CountryList populationData={populationData} />
        <Chart populationData={populationData} />
        <Population populationData={populationData} />
      </div>
    </section>
  );
};

export default WorldPopulation;
