import * as FaIcons from "react-icons/fa";
import styled from "styled-components";
// const IconMap: Record<string, IconType> = FaIcons;
interface CustomIconProps {
  id?: string;
  iconName: keyof typeof FaIcons;
  color?: string;
  size?: number;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  hoverColor?: string;
  hoverBg?: string;
  hoverScale?: number;
  bordered?: boolean;
  borderColor?: string;
}
const IconWrapper = styled.span`
  color: ${(props) => props.color || "none"};
  border-radius: ${(props) => props.borderRadius || "4px"};
  padding: ${(props) => props.padding || "8px"};
  margin: ${(props) => props.margin || "0 4px"};
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.hoverColor || props.color || "none"};
    background: ${(props) => props.hoverBg || "transparent"};
    transform: ${(props) => (props.hoverScale ? "scale(1.1)" : "none")};
  }

  ${(props) =>
    props.bordered &&
    `
    border: 1px solid ${props.borderColor || props.color || "none"};
  `}
`;

const CustomIcon = ({
  id,
  iconName,
  color,
  size = 20,
  borderRadius,
  padding,
  margin,
  hoverColor,
  hoverBg,
  hoverScale,
  bordered,
  borderColor,
  ...rest
}: CustomIconProps) => {
  const IconComponent = FaIcons[iconName];

  if (!IconComponent) {
    console.warn(`Icon ${iconName} not found in react-icons/fa`);
    return null;
  }

  return (
    <IconWrapper
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}
      hoverColor={hoverColor}
      hoverBg={hoverBg}
      hoverScale={hoverScale}
      bordered={bordered}
      borderColor={borderColor}
      {...rest}
    >
      <IconComponent id={id} size={size} />
    </IconWrapper>
  );
};

export default CustomIcon;
