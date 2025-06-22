import React from "react";
import styled from "styled-components";
import colors from "../assets/colors";
interface Props {
  color?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
  padding?: string;
  children: React.ReactNode;
}
export default function CBtn({
  color,
  bgColor,
  border,
  borderRadius,
  children,
  height,
  width,
  padding,
}: Props) {
  return (
    <CustomButton
      color={color}
      bgColor={bgColor}
      border={border}
      borderRadius={borderRadius}
      height={height}
      widht={width}
      padding={padding}
    >
      {children}
    </CustomButton>
  );
}

const CustomButton = styled.button`
  border: ${(props) => props.border || "none"};
  color: ${(props) => getColor(props.color)};
  border-radius: ${(props) => props.borderRadius || "4px"};
  padding: ${(props) => props.padding || "8px"};
  margin: ${(props) => props.margin || "0 4px"};
  background-color: ${(props) => getBgColor(props.bgColor)};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding};
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.hoverColor || props.color || "none"};
    background: ${(props) => props.bgColor || "transparent"};
    transform: ${(props) => (props.hoverScale ? "scale(1.1)" : "none")};
  }

  ${(props) =>
    props.bordered &&
    `
    border: 1px solid ${props.borderColor || props.color || "none"};
  `}
`;
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
const getBgColor = (bgColor?: "blue" | "darkBlue" | "lightBlue") => {
  switch (bgColor) {
    case "blue":
      return colors.button.blue;
    case "darkBlue":
      return colors.background.navy;
    case "lightBlue":
      return colors.background.lightGray;
    default:
      return "inherit";
  }
};
