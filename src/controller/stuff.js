import axios from "axios";
import { setList } from "./stuffSlice";
const api = "http://localhost:4000/api/stuff";

class Stuff {
  #dispatch;
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

  async submitNew(e, stuff) {
    e.preventDefault();
    try {
      const response = await axios.post(api, stuff);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

const stuffController = new Stuff();
export { stuffController, Stuff };
