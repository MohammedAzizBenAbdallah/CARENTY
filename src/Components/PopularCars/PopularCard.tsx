import { BsFuelPump } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { TbSteeringWheel } from "react-icons/tb";
import styled from "styled-components";
import colors from "../../assets/colors";
import { ImageAssets } from "../../assets/Images";
import CBtn from "../../CustomComponents/CBtn";
import CImage from "../../CustomComponents/CImage";
import Cp from "../../CustomComponents/Cp";
import CTitle from "../../CustomComponents/CTitle";
import CustomIcon from "../../CustomComponents/CustomIcon";
import { useEffect, useState } from "react";

interface Props {
  liked: boolean;
  pricePerDay: number;
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  capacity: string;
  width?: string;
  height?: string;
  border?: string;
  recommended?: boolean;
}

const Card = styled.div`
  border: ${(props) => props.border || "none"};
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.background.white};
  display: flex;
  flex-direction: column;
  /* min-height: 100%; */
  /* width: 100%; */
  /* width: ${(props) => (props.recommended ? "calc(25% - 16px)" : "")}; */

  @media (max-width: 700px) {
    width: 100%;
    min-height: 420px;
    min-width: 300px;
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    width: calc(50% - 16px);
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    width: calc(33% - 16px);
  }
  @media (min-width: 1200px) {
    width: calc(25% - 16px);
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0;
  gap: 1rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 4px;
    white-space: nowrap;
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    justify-content: space-evenly;
  }
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & div {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }

  & button {
    padding: 10px 16px;
  }
`;

export default function PopularCard({
  recommended,
  border,
  liked,
  pricePerDay,
  name,
  type,
  image = "",
  fuel,
  transmission,
  capacity,
}: Props) {
  console.log(image);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(
    function () {
      function handleResize() {
        setScreenWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    },
    [screenWidth]
  );
  return (
    <Card recommended={recommended} border={border}>
      <TitleSection>
        <CTitle as="h2" color="black">
          {name}
        </CTitle>
        <CustomIcon iconName="FaHeart" color={liked ? "red" : "gray"} />
      </TitleSection>

      <Cp padding="0px 0px 0px 10px">{type}</Cp>

      {!recommended ? (
        <CImage width="100%" src={ImageAssets["Car"]} />
      ) : screenWidth > 700 ? (
        <CImage width="100%" src={ImageAssets["Car"]} />
      ) : (
        <CImage width="80%" src={ImageAssets["Car"]} />
      )}

      <StatsSection>
        <div>
          <BsFuelPump size={18} color={colors.textColor.gray} />
          <Cp>{fuel}</Cp>
        </div>
        <div>
          <TbSteeringWheel size={18} color={colors.textColor.gray} />
          <Cp>{transmission}</Cp>
        </div>
        <div>
          <GoPeople size={18} color={colors.textColor.gray} />
          <Cp>{capacity}</Cp>
        </div>
      </StatsSection>

      <PriceSection>
        <div>
          <Cp bold="bold" color="black">
            ${pricePerDay}
          </Cp>
          <Cp color="gray">/day</Cp>
        </div>
        <CBtn color="white" bgColor="blue">
          Rental Now
        </CBtn>
      </PriceSection>
    </Card>
  );
}
