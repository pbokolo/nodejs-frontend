import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function StuffComp({ id, title, price, url, clickHandler }) {
  const navigate = useNavigate();
  const clickHand = () => {
    navigate("/stuff", { state: { stuff: { id: `${id}` } } });
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
