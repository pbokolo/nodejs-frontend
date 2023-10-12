import { open, close, setType } from "./stuffDialogSlice";
import { setSelectedStuff } from "./stuffSlice";
class Controller {
  #dispatch;
  constructor(dispatch) {
    this.#dispatch = dispatch;
  }

  open(type = "new") {
    this.#dispatch(open());
    this.#dispatch(setType(type));
  }

  close() {
    this.#dispatch(close());
    this.#dispatch(setSelectedStuff(null));
  }
}

const stuffDialogController = new Controller();
export { stuffDialogController, Controller };
