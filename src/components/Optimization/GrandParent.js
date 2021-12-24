import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);

  console.log("Grand Parent Render");
  return (
    <div>
      <button onClick={() => setNewCount(newCount + 1)}>
        Grand Parent Count - {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};

export default GrandParent;
