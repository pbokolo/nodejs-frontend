import React from "react";

import { Container } from "@mui/material";

import LandingComp from "../components/LandingComp";

import StuffsList from "../components/StuffsList";

export default function Home() {
  return (
    <>
      <LandingComp />
      <Container maxWidth="lg">
        <StuffsList />
      </Container>
    </>
  );
}
