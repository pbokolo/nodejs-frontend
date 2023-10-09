import { open, close } from "./stuffDialogSlice";
class Controller {
  #dispatch;
  constructor(dispatch) {
    this.#dispatch = dispatch;
  }

  open() {
    this.#dispatch(open());
  }

  close() {
    this.#dispatch(close());
  }
}

const stuffDialogController = new Controller();
export { stuffDialogController, Controller };
