import React from "react";
import styled from "styled-components";

const GenericButton = styled.button`
  padding: 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  cursor: pointer;
  width: 100%;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  &:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`
const Button = (props) => {
   return <GenericButton className={props.className} onClick={props.onClick} value={props.value}>{props.children}</GenericButton>;
};
  
export default Button;
