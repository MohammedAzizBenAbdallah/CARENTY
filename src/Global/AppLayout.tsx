import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const CustomAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
`;
export default function AppLayout() {
  return (
    <CustomAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </CustomAppLayout>
  );
}
