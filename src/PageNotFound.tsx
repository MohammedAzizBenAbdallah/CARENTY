import styled from "styled-components";
import colors from "./assets/colors";
const CustomPageNotFOund = styled.div`
  /* border: 1px solid red; */
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
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
export default function PageNotFound() {
  return (
    <CustomPageNotFOund>
      <p>PageNotFOund</p>
    </CustomPageNotFOund>
  );
}
