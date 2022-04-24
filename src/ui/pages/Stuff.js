import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import {
  Button,
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/material";

import AuthDialog from "../components/AuthDialog";

import axios from "axios";

export default function Stuff() {
  const location = useLocation();

  // Cet etat indique si le token d'authentification existe
  const isAuth = localStorage.getItem("token") !== null;

  // Etat de la boite de dialoge de connexion au compte utilisateur
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const [stuff, setStuff] = useState(null);

  // Chaque fois que le composant est monte
  useEffect(() => {
    if (isAuth) {
      // Effectue une requette vers le backend(api)
      axios
        .get(
          `http://localhost:8080/api/stuffs/stuff?id=${location.state.stuff.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((stuffData) => setStuff(stuffData.data.stuff))
        .catch((error) => console.log(error));
    }
  }, [authDialogOpen, isAuth, location.state.stuff.id]);

  const authDialogCloseHandler = () => setAuthDialogOpen(false);

  return (
    <Container maxWidth="sm">
      <Grid container alignItems="center">
        {isAuth ? (
          <Grid item xs={12}>
            <Card>
              <CardHeader
                title={stuff && stuff.title}
                subheader={stuff && `Prix : ${stuff.price / 100} $`}
              />
              <CardMedia
                component="img"
                height="350"
                image={stuff && stuff.imageUrl}
                alt={stuff && `${stuff.title} description photo`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {stuff?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="danger">Supprimer</Button>
              </CardActions>
            </Card>
          </Grid>
        ) : (
          <Button variant="contained" onClick={() => setAuthDialogOpen(true)}>
            Connexion
          </Button>
        )}
      </Grid>
      <AuthDialog open={authDialogOpen} closeHandler={authDialogCloseHandler} />
    </Container>
  );
}
