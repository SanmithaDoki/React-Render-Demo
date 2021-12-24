import React, { useState, useMemo, useCallback } from "react";
import ChildFive from "./ChildFive";

const ParentFour = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sanmitha");

  const person = {
    fName: "Sanmitha",
    lName: "Doki",
  };
  const clickHandler = () => {};

  //If we use useMemo or useCallback then even if we pass object or function
  //then child component will not re-render unnecessarily.. even parent component renders
  const memoizedPerson = useMemo(() => person, []);

  const memoizedClickHandler = useCallback(clickHandler, []);

  console.log("ParentFour Render");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setName("Doki")}>Change Name {name}</button>
      {/* // When object or function is send as prop to child component the it will 
      create new reference when parent component renders so child component also renders 
      even if we use React.memo */}
      {/* <ChildFive name={name} clickHandler={clickHandler} /> */}
      {/* <ChildFive name={name} person={person} /> */}
      <ChildFive name={name} person={memoizedPerson} />
      {/* <ChildFive name={name} clickHandler={memoizedClickHandler} /> */}
    </div>
  );
};

export default ParentFour;
