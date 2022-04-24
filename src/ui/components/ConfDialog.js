import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function ConfDialog({ toDo, title, open, closeHandler }) {
  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle>{`Supprimer l'objet "${title}"?`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Supprimez définitivement l'objet{title}. Cette action est irréversible
        </DialogContentText>
        <DialogActions>
          <Button onClick={() => closeHandler()}>Annuler</Button>
          <Button onClick={toDo}>Supprimer</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
