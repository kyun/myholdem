"use client"; // this is a client component 👈🏽
import React from "react";
import styled from "@emotion/styled";

const Base = styled.div`
  flex: 1 1 0;
  display: flex;
  background: red;
  border: 1px solid green;
  box-sizing: border-box;
`;
interface Props {}

const Card: React.FC<Props> = ({}) => {
  return <Base />;
};
export default Card;
