import React from "react";
import styled from "styled-components";
interface Props {
  src: string;
  height?: string;
  width?: string;
  border?: string;
}
export default function CImage({ src, height, width, border }: Props) {
  return (
    <CustomImage
      src={src}
      height={height}
      border={border}
      width={width}
    ></CustomImage>
  );
}

const CustomImage = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
`;
