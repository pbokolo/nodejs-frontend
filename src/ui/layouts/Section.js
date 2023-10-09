import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StuffCard from "../components/StuffCard";
import StuffDialog from "./StuffDialog";

import { Stuff } from "../../controller/stuff";

export default function Section() {
  const dispatch = useDispatch();
  const stuffController = new Stuff(dispatch);
  const [showDialog, setShowDialog] = useState(false);
  let { list } = useSelector((state) => state.stuffs);

  // Each time the component is mounted
  useEffect(() => {
    stuffController.getAll();
  }, []);

  return (
    <>
      <section className="section">
        {list.map((stuff) => (
          <StuffCard key={stuff._id} stuff={stuff} />
        ))}
      </section>
      {showDialog ? <StuffDialog /> : ""}
    </>
  );
}
