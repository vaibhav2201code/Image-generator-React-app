import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
function App() {
  const [animals, setAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animals = ["dog", "cat", "cow", "gator", "bird", "horse"];
    return animals[Math.floor(Math.random() * 6)];
  };

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal) => {
    return <AnimalShow type={animal} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
