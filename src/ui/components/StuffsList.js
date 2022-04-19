import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import axios from "axios";

import StuffComp from "./Stuff";

import AuthDialog from "./AuthDialog";

export default function StuffsList() {
  const [stuffs, setStuffs] = useState([]);

  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stuffs")
      .then((stuffsData) => setStuffs(stuffsData.data))
      .catch((error) => console.log(error));
  }, [stuffs]);

  // Closes the the auth dialog
  const authDialogCloseHandler = () => setAuthDialogOpen(false);

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {stuffs.map((stuff, index) => (
          <StuffComp
            key={index}
            title={stuff.title}
            price={stuff.price}
            url={stuff.imageUrl}
            clickHandler={setAuthDialogOpen}
          />
        ))}
      </Grid>
      <AuthDialog open={authDialogOpen} closeHandler={authDialogCloseHandler} />
    </>
  );
}
