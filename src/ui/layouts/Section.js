import React, { useState } from "react";
import StuffCard from "../components/StuffCard";
import StuffDialog from "./StuffDialog";

export default function Section() {
  const [showDialog, setShowDialog] = useState(true);
  return (
    <>
      <section className="section">
        <StuffCard />
        <StuffCard />
        <StuffCard />
        <StuffCard />
        <StuffCard />
        <StuffCard />
        <StuffCard />
        <StuffCard />
      </section>
      {showDialog ? <StuffDialog /> : ""}
    </>
  );
}
