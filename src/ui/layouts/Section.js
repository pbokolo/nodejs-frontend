import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StuffCard from "../components/StuffCard";
import StuffDialog from "./StuffDialog";
import Spinner from "../components/Spinner";

import { Stuff } from "../../controller/stuff";
import { Controller } from "../../controller/stuffDialog";
import { setSelectedStuff } from "../../controller/stuffSlice";

export default function Section() {
  const dispatch = useDispatch();
  const stuffController = new Stuff(dispatch);
  const dialogController = new Controller(dispatch);
  let { list } = useSelector((state) => state.stuffs);
  let { show } = useSelector((state) => state.stuffDialog);

  // Each time the component is mounted
  useEffect(() => {
    stuffController.getAll();
  });

  const handleClick = (e) => {
    const id = e.target.closest(".card").id;
    const item = list.find((item) => item._id === id);
    if (!item) return;
    dispatch(setSelectedStuff(item));
    dialogController.open("details");
  };

  return (
    <>
      <section onClick={handleClick} className="section">
        {list ? (
          list.map((stuff) => <StuffCard key={stuff._id} stuff={stuff} />)
        ) : (
          <Spinner />
        )}
      </section>

      {show ? <StuffDialog /> : ""}
    </>
  );
}
