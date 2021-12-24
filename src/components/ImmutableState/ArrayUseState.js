import React, { useState } from "react";

const initialState = ["Sanmitha", "Doki"];

const ArrayUseState = () => {
  const [persons, setPersons] = useState(initialState);

  const onClickHandler = () => {
    let newPersons = [...persons];
    newPersons.push("Sindhu");
    newPersons.push("Sahithi");
    setPersons(newPersons);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};

export default ArrayUseState;
