import React, { useState } from "react";

function Car() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function addCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function removeCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h1>List of Car Objects</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => removeCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" onChange={handleYearChange} value={carYear} />
      <br />
      <input type="text" onChange={handleMakeChange} value={carMake} />
      <br />
      <input type="text" onChange={handleModelChange} value={carModel} />
      <br />
      <button onClick={addCar}>Add Car</button>
    </div>
  );
}
export default Car;
