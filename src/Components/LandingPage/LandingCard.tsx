import styled from "styled-components";
import colors from "../../assets/colors";
import CBtn from "../../CustomComponents/CBtn";
import Cp from "../../CustomComponents/Cp";
import CTitle from "../../CustomComponents/CTitle";
import CImage from "../../CustomComponents/CImage";
import { ImageAssets } from "../../assets/Images";
import { useEffect, useState } from "react";
interface Props {
  border?: string;
  borderRadius?: string;
  bgImage: keyof Pick<typeof ImageAssets, "Carbackground1" | "Carbackground2">;
  title?: string;
  paragraph?: string;
  buttonP?: string;
  car?: keyof typeof ImageAssets;
}

const CustomLandingCard = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.bgColor || "none"};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  height: 100%;
  width: 100%;
  /* background-color: ${colors.background.white}; */
  padding-left: 20px;
  padding-right: 10px;
  z-index: -1;
  & img {
    margin-left: auto;
    padding-bottom: 20px;
  }
  & button {
    margin-top: auto;
  }
`;
const ImageContainer = styled.div`
  border-radius: ${(props) => props.borderRadius || "10px"};
  border: ${(props) => props.border || "none"};
  width: 45%;
  height: 100%;
  /* background-image: url(${(props) =>
    ImageAssets[props.bgImage as keyof typeof ImageAssets]}); */
  background-image: url(${(props) =>
    ImageAssets[props.bgImage as keyof typeof ImageAssets]});
  background-position: center;
  @media (max-width: 700px) {
    width: 90%;
    height: 100%;
  }
  @media (max-width: 320px) {
    height: 90%;
  }
  @media (min-width: 2560px) {
    width: 40%;
    height: 100%;
  }
`;
export default function LandingCard({
  border,
  borderRadius,
  title,
  paragraph,
  buttonP,
  car,
  bgImage,
}: Props) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(function () {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ImageContainer
      bgImage={bgImage}
      borderRadius={borderRadius}
      border={border}
    >
      <CustomLandingCard bgImage={bgImage}>
        <CTitle color="white" as="h1" bold="bolder">
          {title}
        </CTitle>
        <Cp color="white" bold="bolder">
          {paragraph}
        </Cp>
        <CBtn bgColor="blue">
          <Cp color="white" bold="bolder">
            {buttonP}
          </Cp>
        </CBtn>
        <CImage
          // border="1px solid red"
          src={ImageAssets[car || "Car"]}
          width={"50%"}
        />
      </CustomLandingCard>
    </ImageContainer>
  );
}
