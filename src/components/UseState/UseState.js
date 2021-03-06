import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("Render count");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count - 0</button>
      <button onClick={() => setCount(5)}>Count - 5</button>
    </div>
  );
};

export default UseState;
