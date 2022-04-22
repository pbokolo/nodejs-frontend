import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";


import axios from "axios";

export default function AuthDialog({ open, closeHandler }) {
  const txtInitValues = { email: "", password: "" };

  const [txtValues, setTxtValues] = useState(txtInitValues);

  /**
   * Handles the submit event of the auth form
   * @param {The object event} e
   */
  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/auth/signin", txtValues)
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setTxtValues({ ...txtValues, txtInitValues });
      })
      .catch((error) => console.log(error));
  };

  /**
   * Handles the change on a text field
   * @param {The object event} e
   * @returns The new state
   */
  const txtChangeHandler = (e) =>
    setTxtValues({
      ...txtValues,
      [e.target.id]: `${e.target.value}`,
    });

  return (
    <Dialog open={open} onClose={closeHandler}>
      {" "}
      <DialogTitle>Connexion au compte</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Veuillez entrer votre email et mot de passe pour vous connecter
        </DialogContentText>
        <form onSubmit={submitHandler}>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            value={txtValues.email}
            onChange={txtChangeHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Mot de passe"
            type="password"
            fullWidth
            variant="standard"
            value={txtValues.password}
            onChange={txtChangeHandler}
          />
          <DialogActions>
            <Button onClick={closeHandler}>Annuler</Button>
            <Button type="submit" onClick={closeHandler}>
              Connexion
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
