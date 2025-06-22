import styled from "styled-components";
import Cp from "../../CustomComponents/Cp";
import colors from "../../assets/colors";
import cars from "../../data/Cars";
import PopularCard from "../PopularCars/PopularCard";
const CustomPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  min-width: 100dvw;
  background-color: ${colors.background.lightGray};
  margin-bottom: 100px;
`;
const CarsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 10px;
  gap: 10px;
`;
export default function RecommendedPage() {
  return (
    <CustomPage>
      <Cp padding="0px 0px 0px 10px " color="gray" bold="bolder">
        RecommendedPage
      </Cp>
      <CarsSection>
        {cars.map((car) => (
          <PopularCard recommended={true} {...car} />
        ))}
      </CarsSection>
    </CustomPage>
  );
}
