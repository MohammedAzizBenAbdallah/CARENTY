import styled from "styled-components";
import colors from "../assets/colors";
import LandingPage from "../Components/LandingPage/LandingPage";
import PopularCars from "../Components/PopularCars/PopularPage";
import RecommendedPage from "../Components/RecommendedPage/RecommendedPage";
export default function Home() {
  const HomePage = styled.div`
    background-color: ${colors.background.lightGray};
    width: 100%;
    display: grid;
  `;
  return (
    <HomePage>
      <LandingPage />
      <PopularCars />
      <RecommendedPage />
    </HomePage>
  );
}
