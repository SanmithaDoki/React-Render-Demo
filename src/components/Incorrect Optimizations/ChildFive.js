import React from "react";

const ChildFive = ({ name, person }) => {
  console.log("ChildFive Render");
  return (
    <div>
      Hello {name}. My fullname is {person.fName} {person.lName}
    </div>
  );
};

export default React.memo(ChildFive);
