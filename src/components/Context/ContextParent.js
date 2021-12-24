import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("ContextParent Render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      {/* <CountProvider value={count}>
        <MemoizedChildA />
      </CountProvider> */}
      <CountProvider value={count}>{children}</CountProvider>
    </div>
  );
};

export default ContextParent;
