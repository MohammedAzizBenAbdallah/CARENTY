import styled from "styled-components";
import LandingCard from "./LandingCard";
import colors from "../../assets/colors";
import { useEffect, useState } from "react";
import LandingPageAction from "./LandingPageAction";
import CBtn from "../../CustomComponents/CBtn";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
const CustomLandingPage = styled.div`
  /* border: 1px solid red; */
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 90px;
  min-height: 100vh;
  width: 100%;
  gap: 10px;
  background-color: ${colors.background.lightGray};
  @media (max-width: 700px) {
    padding-top: 70px;
    margin-top: 190px;
    flex-direction: column;
  }
`;
const Posters = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Actions = styled.div`
  /* border: 1px solid red; */
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
function LandingPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  useEffect(() => {
    const handleresize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);
  if (isMobile) {
    return (
      <CustomLandingPage>
        <LandingCard
          bgImage="Carbackground1"
          border="1px solid black"
          car={"Car"}
          title="The Best Platform for Car Rental"
          paragraph="Ease of doing a car rental safely and reliably. Of course at a low price."
          buttonP="Rental Car"
        />
        <Actions>
          <LandingPageAction title="Pick-Up" />
          <CBtn
            padding="15px"
            color="white"
            bgColor="blue"
            width="100%"
            height="30%"
          >
            <HiMiniArrowsUpDown />
          </CBtn>
          <LandingPageAction title="Drop-Off" />
        </Actions>
      </CustomLandingPage>
    );
  } else {
    return (
      <CustomLandingPage>
        <Posters>
          <LandingCard
            bgImage="Carbackground1"
            border="1px solid black"
            car={"Car"}
            title="The Best Platform for Car Rental"
            paragraph="Ease of doing a car rental safely and reliably. Of course at a low price."
            buttonP="Rental Car"
          />
          <LandingCard
            border="1px solid black"
            bgImage="Carbackground2"
            car={"Car"}
            title="Easy way to rent a car at a low price"
            paragraph="Providing cheap car rental services and safe and comfortable facilities."
            buttonP="Rental Car"
          />
        </Posters>
        <Actions>
          <LandingPageAction title="Pick-Up" />
          <CBtn
            padding="15px"
            color="white"
            bgColor="blue"
            width="100%"
            height="30%"
          >
            <HiMiniArrowsUpDown />
          </CBtn>
          <LandingPageAction title="Drop-Off" />
        </Actions>
      </CustomLandingPage>
    );
  }
}

export default LandingPage;
