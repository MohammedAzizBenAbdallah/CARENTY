import styled from "styled-components";
import LandingCard from "./LandingCard";
const CustomLandingPage = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 100px;
  height: 100vh;
  width: 100%;
  gap: 10px;
  @media (max-width: 700px) {
    padding-top: 70px;
    margin-top: 190px;
    flex-direction: column;
  }
`;
function LandingPage() {
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
      <LandingCard
        border="1px solid black"
        bgImage="Carbackground2"
        car={"Car"}
        title="Easy way to rent a car at a low price"
        paragraph="Providing cheap car rental services and safe and comfortable facilities."
        buttonP="Rental Car"
      />
    </CustomLandingPage>
  );
}

export default LandingPage;
