import React from "react";

import { Stack, Container } from "@mui/material";

import LandingComp from "../components/LandingComp";

import StuffsList from "../components/StuffsList";

export default function Home() {
  return (
    <Stack sx={{ marginLeft: "-0.5em", marginRight: "-0.5em" }}>
      <LandingComp />
      <Container maxWidth="lg">
        <StuffsList />
      </Container>
    </Stack>
  );
}
