import React, { useState } from "react";
import styled from "styled-components";
import "./index.css";
import { HiArrowSmRight } from "react-icons/hi";
const Button = styled.button`
  background-color: #219f94;
  color: #fff;
  font-size: 15px;
  border-color: transparent;
  padding: 4px 12px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: #0a2540;
    transition: all 0.5s ease-out;
  }
  &:secondary {
    background-color: red;
  }
`;
export const ButtonPrimary = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div>
      <Button onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        {props.children}
        {isShown && <HiArrowSmRight className="ms-1" />}
      </Button>
    </div>
  );
};
export default ButtonPrimary;
