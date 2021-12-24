import React, { useState } from "react";

const initialState = {
  firstName: "Doki",
  lastName: "Sanmitha",
};

const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState);

  const onClickHandler = () => {
    let newPerson = { ...person };
    newPerson.firstName = "Sanmitha";
    newPerson.lastName = "Doki";
    setPerson(newPerson);
  };

  return (
    <div>
      <button onClick={onClickHandler}>
        {person.firstName} {person.lastName}
      </button>
    </div>
  );
};

export default ObjectUseState;
