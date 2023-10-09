import React, { useState, useEffect } from "react";
import StuffCard from "../components/StuffCard";
import StuffDialog from "./StuffDialog";

import { stuffController } from "../../controller/stuff";

export default function Section() {
  const [showDialog, setShowDialog] = useState(false);
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    stuffController.getAll(setStuffs);
  }, []);
  return (
    <>
      <section className="section">
        {stuffs.map((stuff) => (
          <StuffCard key={stuff._id} stuff={stuff} />
        ))}
      </section>
      {showDialog ? <StuffDialog /> : ""}
    </>
  );
}
