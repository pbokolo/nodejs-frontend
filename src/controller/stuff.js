import axios from "axios";
import { setList } from "./stuffSlice";
import { close } from "./stuffDialogSlice";
import { setSelectedStuff } from "./stuffSlice";
const api = "http://localhost:4000/api/stuff";

class Stuff {
  #dispatch;
  initialState = {
    title: "",
    price: "",
    imageUrl: "",
    description: "",
    userId: "pbokolo",
  };
  constructor(dispatch) {
    this.#dispatch = dispatch;
  }

  async getAll() {
    try {
      const stuffs = await axios.get(api);
      this.#dispatch(setList(stuffs.data));
    } catch (error) {
      console.log(error);
    }
  }

  async submitNew(stuff) {
    try {
      const response = await axios.post(api, stuff);
      console.log(response);
      this.#closeDialog();
    } catch (error) {
      console.log(error);
    }
  }

  async submitUpdate(stuff) {
    try {
      const response = await axios.put(api, stuff);
      console.log(response);
      this.#closeDialog();
    } catch (error) {
      console.log(error);
    }
  }

  #closeDialog() {
    this.#dispatch(close());
    this.#dispatch(setSelectedStuff(null));
  }
}

const stuffController = new Stuff();
export { stuffController, Stuff };
