import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

export default function AuthDialog({ open, closeHandler }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="pwd"
            label="Mot de passe"
            type="password"
            fullWidth
            variant="standard"
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
