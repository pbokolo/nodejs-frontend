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

  async submitNew(stuff) {
    try {
      const response = await axios.post(api, stuff);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async submitUpdate(stuff) {
    try {
      const response = await axios.put(api, stuff, {
        params: { id: stuff._id },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

const stuffController = new Stuff();
export { stuffController, Stuff };
