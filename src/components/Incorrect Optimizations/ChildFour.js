import React from "react";

const ChildFour = ({ name }) => {
  const date = new Date();

  console.log("ChildFour Render");
  return (
    <div>
      Hello {name}. Now the Time is {date.getHours()}:{date.getMinutes()}:
      {date.getSeconds()}
    </div>
  );
};

export default React.memo(ChildFour);
