import { open, close, setType } from "./stuffDialogSlice";
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
  }
}

const stuffDialogController = new Controller();
export { stuffDialogController, Controller };
