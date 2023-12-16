import React from "react";
import UserCard from "./components/user-card/UserCard";
import ButtonList from "./components/button-list/ButtonList";
import WorldPopulation from "./components/world-population/WorldPopulation";
import TitleLine from "./components/title-and-line/TitleLine";
import Creditcard from "./components/creditcard/Creditcard";

function App() {
  return (
    <main className="flex flex-col w-full p-6 gap-8 items-center">
      <TitleLine numEjercicio={1} />
      <Creditcard />
      <TitleLine numEjercicio={2} />
      <UserCard />
      <TitleLine numEjercicio={3} />
      <ButtonList bottonsQuantity={31} />
      <TitleLine numEjercicio={4} />
      <WorldPopulation />
    </main>
  );
}

export default App;
