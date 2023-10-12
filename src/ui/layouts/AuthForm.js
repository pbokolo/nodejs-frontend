import React from "react";

export default function AuthForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return <form onSubmit={handleSubmit}></form>;
}
