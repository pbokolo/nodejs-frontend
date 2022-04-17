import React from "react";

import { Typography, Grid } from "@mui/material";

import landingImg from "../../assets/images/landing-image.jpg";

export default function LandingComp() {
  return (
    <>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundImage: `url(${landingImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          height: "17em",
          marginLeft: "0%",
        }}
      >
        <Typography variant="h4">
          Le meilleur endroit pour vendre vos objets
        </Typography>
      </Grid>
    </>
  );
}
