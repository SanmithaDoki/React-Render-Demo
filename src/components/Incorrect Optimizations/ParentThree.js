import React, { useState } from "react";
import ChildFour from "./ChildFour";
import ChildThree from "./ChildThree";

const ParentThree = ({ children }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sanmitha");

  console.log("ParentThree Render");

  //if we are sending jsx as children then React.memo will not work
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setName("Doki")}>Change Name {name}</button>
      {/* // In this the child component will not render when we click on count button 
      because there is no change in props.. and the timer added in child component 
      also not updated so in such cases dont use React.memo() */}
      <ChildFour name={name} />
      {/* <ChildThree name={name}>
        <strong>Hello</strong>
      </ChildThree> */}
    </div>
  );
};

export default ParentThree;
