import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

export default function StuffComp({ title, price, url, clickHandler }) {
  const clickHand = () => {
    if (localStorage.getItem("token") === null) {
      clickHandler(true);
    } else {
      console.log(localStorage.getItem("token"));
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        variant="outlined"
        onClick={clickHand}
        sx={{
          height: 300,
          backgroundImage: `url(${url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          borderRadius: 0,
          "&:hover": { cursor: "pointer" },
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{price}</Typography>
      </Paper>
    </Grid>
  );
}
