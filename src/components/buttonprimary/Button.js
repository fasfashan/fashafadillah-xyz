import React, { useState } from "react";
import "./index.css";
import { HiArrowSmRight } from "react-icons/hi";
export const BUttonPrimary = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button data-toggle="tooltip" title="Case study in progress!" className="button-primary" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        {props.children}

        {isShown && <HiArrowSmRight className="ms-1" />}
      </button>
    </div>
  );
};
export default BUttonPrimary;
