import { useEffect, useState } from "react";
import styled from "styled-components";
import CTitle from "../CustomComponents/CTitle";
import CustomIcon from "../CustomComponents/CustomIcon";
import colors from "../assets/colors";

// === Styled Components ===

const CustomHeader = styled.div`
  background-color: ${colors.background.white};
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 1rem;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "title navbar"
      "searchbar searchbar";
    gap: 0.5rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-left: 20px;
  grid-area: title;
`;

const Navbar = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  padding-right: 20px;
`;

const Searchbar = styled.div`
  grid-area: searchbar;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0.5em;
  /* width: 100%; */

  & input {
    flex: 1;
    border: none;
    font-size: 1rem;
    outline: none;
    background: transparent;
    height: 100%;
  }

  & input:focus {
    box-shadow: none;
    outline: none;
  }

  & #search-icon:hover {
    cursor: default;
  }

  @media (max-width: 700px) {
    width: 100%;
    border: none;
    padding-right: 20px;
  }
  @media (max-width: 400px) {
     & input {
      width: 50%;
    }
  }
`;

// 👇 Mobile layout for search sections
const MobileSearchWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

const SearchInputSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.5em;
  border: 1px solid gray;
  border-radius: 10px;

  & input {
    flex: 1;
    border: none;
    font-size: 1rem;
    outline: none;
    background: transparent;
  }
`;

const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  border: 1px solid gray;
  border-radius: 10px;
`;

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleresize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);

  return (
    <CustomHeader>
      <TitleWrapper>
        <CTitle bold="bolder" as="h1" color="blue">
          MORENT
        </CTitle>
      </TitleWrapper>

      <Searchbar>
        {!isMobile ? (
          <>
            <CustomIcon
              id="search-icon"
              iconName="FaSearch"
              size={16}
              color="gray"
            />
            <input type="text" placeholder="Search for cars, brands..." />
            <CustomIcon
              iconName="FaFilter"
              size={16}
              color="gray"
              padding={""}
            />
          </>
        ) : (
          <MobileSearchWrapper>
            <SearchInputSection>
              <CustomIcon iconName="FaSearch" size={16} color="gray" />
              <input type="text" placeholder="Search for cars, brands..." />
            </SearchInputSection>
            <FilterSection>
              <CustomIcon iconName="FaFilter" size={16} color="gray" />
            </FilterSection>
          </MobileSearchWrapper>
        )}
      </Searchbar>

      <Navbar>
        {!isMobile ? (
          <>
            <CustomIcon
              // iconName="FaHeart"
              iconName={"FaHeart"}
              size={16}
              color="gray"
              borderRadius="50%"
              padding="10px"
              hoverColor={colors.textColor.blue}
              hoverScale={1.1}
              bordered
            />
            <CustomIcon
              iconName="FaBell"
              size={16}
              color="gray"
              borderRadius="50%"
              padding="10px"
              hoverColor={colors.textColor.blue}
              hoverScale={1.1}
              bordered
            />
            <CustomIcon
              iconName="FaCog"
              size={16}
              color="gray"
              borderRadius="50%"
              padding="10px"
              hoverColor={colors.textColor.blue}
              hoverScale={1.1}
              bordered
            />
            <CustomIcon
              iconName="FaUser"
              size={16}
              color="gray"
              borderRadius="50%"
              padding="10px"
              hoverColor={colors.textColor.blue}
              hoverScale={1.1}
              bordered
            />
          </>
        ) : (
          <CustomIcon
            iconName="FaUser"
            size={16}
            color="gray"
            borderRadius="50%"
            padding="10px"
            hoverColor={colors.textColor.blue}
            hoverScale={1.1}
            bordered
          />
        )}
      </Navbar>
    </CustomHeader>
  );
}
