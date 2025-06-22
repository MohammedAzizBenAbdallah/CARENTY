import styled from "styled-components";
import colors from "../assets/colors";
import Cp from "../CustomComponents/Cp";
import CTitle from "../CustomComponents/CTitle";

const CustomFooter = styled.div`
  min-width: 100vw;
  background-color: ${colors.background.white};
  display: flex;
  flex-direction: column;
  & * {
    width: 100%;
  }
`;
const Divider = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 1px;
  background-color: gray;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  width: 100%;
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <CustomFooter>
      <Body>
        <TitleSection>
          <CTitle color="blue">Morent</CTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0px",
              width: "50%",
              marginTop: "-30px",
            }}
          >
            <Cp color="gray">
              Our vision is to provide convenienceand help increase your sales
              business.
            </Cp>
          </div>
        </TitleSection>
        <Links>
          <LinkSection>
            <CTitle as="h2">About</CTitle>
            <Cp color="gray">How it works</Cp>
            <Cp color="gray">Featured</Cp>
            <Cp color="gray">Partnership</Cp>
            <Cp color="gray">Business relation</Cp>
          </LinkSection>
          <LinkSection>
            <CTitle as="h2">Community</CTitle>
            <Cp color="gray">Events</Cp>
            <Cp color="gray">Blog</Cp>
            <Cp color="gray">Podcast</Cp>
            <Cp color="gray">Invite a friend</Cp>
          </LinkSection>
          <LinkSection>
            <CTitle as="h2">Socials</CTitle>
            <Cp color="gray">Discord</Cp>
            <Cp color="gray">instagram</Cp>
            <Cp color="gray">Twitter</Cp>
            <Cp color="gray">Facebook</Cp>
          </LinkSection>
        </Links>
      </Body>
      <Divider />
      <Summary>
        <Cp bold="bolder">@2022 Morent .All rights reserved</Cp>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            paddingRight: "20px",
          }}
        >
          <Cp>Privacy & Policy </Cp>
          <Cp>Terms & condition </Cp>
        </div>
      </Summary>
    </CustomFooter>
  );
}
