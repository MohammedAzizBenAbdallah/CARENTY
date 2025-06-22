import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { FaCircle } from "react-icons/fa";
import styled from "styled-components";
import colors, { palette } from "../../assets/colors";
import Cp from "../../CustomComponents/Cp";
import CTitle from "../../CustomComponents/CTitle";

// Register English locale for countries
countries.registerLocale(enLocale);

interface Props {
  title: string;
}

const CustomActionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${colors.background.white};
  border-radius: 10px;
`;

const TitleSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

const ActionsMenu = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ActionItem = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  width: 30%;

  & select {
    /* border: 1px solid ${palette.cyan};
     */
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    margin-top: 0.5em;
    font-family: inherit;
  }

  & select option {
    padding: 0.5em;
  }
`;

export default function LandingPageAction({ title }: Props) {
  // Get country names
  const countryObj = countries.getNames("en", { select: "official" });
  const countryList = Object.entries(countryObj); // [ ["US", "United States"], ["FR", "France"], ... ]

  return (
    <CustomActionDiv>
      <TitleSection>
        <CTitle>
          <FaCircle
            style={{
              margin: "0 5px",
              border: `4px solid ${palette.navyBlue.lighter}`,
              borderRadius: "50%",
            }}
            color={colors.textColor.blue}
            size={15}
          />
          {title}
        </CTitle>
      </TitleSection>

      <ActionsMenu>
        <ActionItem>
          <Cp bold="bolder">Location</Cp>
          <select>
            <option value="">Select a country</option>
            {countryList.map(([code, name]) => (
              <option key={code} value={name}>
                {name}
              </option>
            ))}
          </select>
        </ActionItem>

        <ActionItem>
          <Cp>Date</Cp>
          <select>
            <option value="">Select a date</option>
          </select>
        </ActionItem>
        <ActionItem>
          <Cp>Time</Cp>
          <select>
            <option value="">Select a time</option>
          </select>
        </ActionItem>
      </ActionsMenu>
    </CustomActionDiv>
  );
}
