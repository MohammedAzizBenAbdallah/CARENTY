import React from "react";
import styled from "styled-components";
import colors from "../assets/colors";

interface Props {
  children: React.ReactNode;
  as?: "h1" | "h2";
  color?: "black" | "white" | "blue";
  bold?: "bold" | "bolder" | "normal" | "lighter";
  padding?: string;
  gridArea?: string;
  margin?: string;
}

export default function CTitle({
  children,
  as = "h1",
  color = "black",
  bold = "normal",
  padding,
  gridArea,
  margin,
}: Props) {
  const Component = as === "h2" ? Title2 : Title1;
  return (
    <Component
      margin={margin}
      gridArea={gridArea}
      padding={padding}
      bold={bold}
      color={color}
    >
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
  margin: ${(props) => props.margin};
  grid-area: ${(props) => props.girdArea};
  color: ${(props) => getColor(props.color)};
  /* font-family: 'Electrolize', monospace; */
  font-size: 2rem;
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.bold};
`;

const Title2 = styled.h2<TitleProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => getColor(props.color)};
  /* font-family: 'Electrolize', monospace; */
  font-size: 1.5rem;
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.bold};
`;
