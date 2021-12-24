import React from "react";

const ChildThree = ({ name, children }) => {
  console.log("ChildThree Render");
  return (
    <div>
      {children} {name}
    </div>
  );
};

export default React.memo(ChildThree);
