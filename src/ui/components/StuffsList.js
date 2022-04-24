import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import axios from "axios";

import StuffComp from "./Stuff";

export default function StuffsList() {
  // La liste des biens en vente
  const [stuffs, setStuffs] = useState([]);

  // Recupere les biens en vente chaque fois que le composant est monte
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/stuffs")
      .then((stuffsData) => setStuffs(stuffsData.data))
      .catch((error) => console.log(error));
  }, [stuffs]);

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {stuffs.map((stuff, index) => (
          <StuffComp
            key={index}
            id={stuff._id}
            title={stuff.title}
            price={stuff.price}
            url={stuff.imageUrl}
          />
        ))}
      </Grid>
    </>
  );
}
