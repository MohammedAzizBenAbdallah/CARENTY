import React from "react";
import styled from "styled-components";
import colors from "../assets/colors";

interface Props {
  children: React.ReactNode;
  as?: "h1" | "h2";
  color?: "black" | "white" | "blue";
  bold: "bold" | "bolder" | "normal" | "lighter";
}

export default function CTitle({
  children,
  as = "h1",
  color = "black",
  bold = "normal",
}: Props) {
  const Component = as === "h2" ? Title2 : Title1;
  return (
    <Component bold={bold} color={color}>
      {children}
    </Component>
  );
}

// Shared style for both
const getColor = (color?: "black" | "white" | "blue") => {
  switch (color) {
    case "black":
      return colors.textColor.black;
    case "white":
      return colors.textColor.white;
    case "blue":
      return colors.textColor.blue;
    default:
      return "inherit";
  }
};

interface TitleProps {
  color?: "black" | "white" | "blue";
}

const Title1 = styled.h1<TitleProps>`
  color: ${(props) => getColor(props.color)};
  /* font-family: 'Electrolize', monospace; */
  font-size: 2rem;
  font-weight: ${(props) => props.bold};
`;

const Title2 = styled.h2<TitleProps>`
  color: ${(props) => getColor(props.color)};
  /* font-family: 'Electrolize', monospace; */
  font-size: 1.5rem;
  font-weight: ${(props) => props.bold};
`;
