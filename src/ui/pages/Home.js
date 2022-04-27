import React, { useState } from "react";

import { Container, Fab, Grid } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import LandingComp from "../components/LandingComp";

import StuffsList from "../components/StuffsList";

import StuffDialog from "../components/StuffDialog";

export default function Home() {
  const [stuffDialogOpen, setStuffDialogOpen] = useState(false);

  const stuffDialogCloseHandler = () => setStuffDialogOpen(false);

  return (
    <>
      <LandingComp />
      <Container maxWidth="lg">
        <StuffsList />
        <Grid container item justifyContent="center" alignItems="center">
          <Fab variant="extended" onClick={() => setStuffDialogOpen(true)}>
            <AddIcon sx={{ mr: 1 }} />
            Nouveau
          </Fab>
        </Grid>
        <StuffDialog
          open={stuffDialogOpen}
          closeHandler={stuffDialogCloseHandler}
        />
      </Container>
    </>
  );
}
