import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  TextareaAutosize,
} from "@mui/material";

export default function StuffDialog({ open, closeHandler }) {
  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>Enregistrez un nouvel objet</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Pour enregistrer un nouvel objet, veuillez remplire le formulaire
          ci-dessous
        </DialogContentText>
        <form>
          <TextField id="title" label="Titre" fullWidth variant="standard" />
          <TextField id="price" label="Prix" fullWidth variant="standard" />
          <TextField id="imageUrl" label="Image" fullWidth variant="standard" />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            maxRows={10}
            placeholder="Description"
            style={{ width: 550 }}
          />
          <DialogActions>
            <Button onClick={closeHandler}>Annuler</Button>
            <Button>Enregistrer</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
