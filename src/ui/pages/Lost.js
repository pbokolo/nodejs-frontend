import React from "react";

import { Link } from "react-router-dom";

export default function Lost() {
  return (
    <div>
      La ressource que vous demandez n'existe pas.{" "}
      <Link to="/">Retournez à la page d'accueil</Link>
    </div>
  );
}
