import React from "react";
import styled from "styled-components";
import colors from "../assets/colors";
interface Props {
  children: React.ReactNode;
  color?: "black" | "white" | "blue" | "gray";
  bold?: "bold" | "bolder" | "normal" | "lighter";
  bgColor?: "blue" | "darkBlue" | "lightBlue" | "inherit" | "transparent";
  padding?: string;
  gridArea?: string;
}
export default function Cp({
  children,
  color,
  bold,
  padding,
  bgColor = "transparent",
  gridArea,
}: Props) {
  return (
    <CustomP
      gridArea={gridArea}
      padding={padding}
      bgColor={bgColor}
      color={color}
      bold={bold}
    >
      {children}
    </CustomP>
  );
}
const CustomP = styled.p`
  grid-area: ${(props) => props.gridArea};
  padding: ${(props) => props.padding || "0px"};
  color: ${(props) => getColor(props.color)};
  /* font-family: 'Electrolize', monospace; */
  font-size: 1rem;
  font-weight: ${(props) => props.bold};
  background-color: ${(props) => getBgColor(props.bgColor)};
`;

const getColor = (color?: "black" | "white" | "blue" | "gray") => {
  switch (color) {
    case "black":
      return colors.textColor.black;
    case "white":
      return colors.textColor.white;
    case "blue":
      return colors.textColor.blue;
    case "gray":
      return colors.textColor.gray;
    default:
      return "inherit";
  }
};
const getBgColor = (bgColor?: "blue" | "darkBlue" | "lightBlue") => {
  switch (bgColor) {
    case "blue":
      return colors.background.blueTint;
    case "darkBlue":
      return colors.textColor.white;
    case "lightBlue":
      return colors.textColor.blue;
    default:
      return "inherit";
  }
};
