import styled from "styled-components";
import Cp from "../../CustomComponents/Cp";
import { Link } from "react-router-dom";
import colors from "../../assets/colors";
import PopularCard from "./PopularCard";

const CustomPopularCars = styled.div`
  background-color: ${colors.background.lightGray};
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50vh;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px;
  gap: 10px;

  @media (max-width: 700px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 1rem 0.5rem;
    gap: 1rem;

    & > div {
      scroll-snap-align: start;
      flex: 0 0 80%;
    }
  }
`;

export default function PopularCars() {
  return (
    <CustomPopularCars>
      <TitleSection>
        <Cp padding="0px 0px 0px 10px">Popular Cars</Cp>
        <Link style={{ textDecoration: "none" }} to={"/cars"}>
          <Cp padding="0px 0px 10px 0">View All</Cp>
        </Link>
      </TitleSection>
      <Cards>
        <PopularCard
          liked={true}
          name={"Koenigsegg"}
          fuel={"90L"}
          capacity={"2 People"}
          transmission={"Manual"}
          type={"Sport"}
          image={""}
          pricePerDay={99}
        />
        <PopularCard
          name={"Lamborghini"}
          fuel={"85L"}
          capacity={"2 People"}
          transmission={"Automatic"}
          type={"Luxury"}
          image={""}
          pricePerDay={149}
          liked={false}
        />
        <PopularCard
          name={"Tesla"}
          fuel={"Electric"}
          capacity={"5 People"}
          transmission={"Automatic"}
          type={"Sedan"}
          image={""}
          pricePerDay={129}
          liked={true}
        />
        <PopularCard
          name={"Tesla"}
          fuel={"Electric"}
          capacity={"5 People"}
          transmission={"Automatic"}
          type={"Sedan"}
          image={""}
          pricePerDay={129}
          liked={true}
        />
      </Cards>
    </CustomPopularCars>
  );
}
