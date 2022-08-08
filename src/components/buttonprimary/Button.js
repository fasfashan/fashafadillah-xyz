import React, { useState } from "react";
import "./index.css";
export const BUttonPrimary = (props) => {
  return (
    <div>
      <button className="button-primary">{props.children}</button>
    </div>
  );
};
export default BUttonPrimary;
