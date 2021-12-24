import React, { useState } from "react";
import ChildTwo from "./ChildTwo";

const ParentTwo = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sanmitha");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setName("Doki")}>Change Name {name}</button>
      <ChildTwo name={name} />
    </div>
  );
};

export default ParentTwo;
