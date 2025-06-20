import styled from "styled-components";
import colors from "../assets/colors";
import LandingPage from "../Components/LandingPage/LandingPage";
export default function Home() {
  const HomePage = styled.div`
    background-color: ${colors.background.primary};
    width: 100%;
    display: grid;
  `;
  return (
    <HomePage>
      <LandingPage />
    </HomePage>
  );
}
