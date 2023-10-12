import { closeAuthDialog, openAuthDialog } from "./authSlice";

class Controller {
  #dispatcher;
  constructor(dispatcher) {
    this.#dispatcher = dispatcher;
  }

  open() {
    this.#dispatcher(openAuthDialog());
  }

  close() {
    this.#dispatcher(closeAuthDialog());
  }
}

export { Controller };
