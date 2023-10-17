import axios from "axios";
import { setList } from "./stuffSlice";
import { close } from "./stuffDialogSlice";
import { setSelectedStuff } from "./stuffSlice";
const api = "http://localhost:4000/api/stuffs";

class Stuff {
  #dispatch;
  initialState = {
    title: "",
    price: "",
    imageUrl: "",
    description: "",
    userId: "",
  };
  constructor(dispatch) {
    this.#dispatch = dispatch;
  }

  async getAll(user) {
    try {
      const stuffs = await axios.get(api, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      this.#dispatch(setList(stuffs.data));
    } catch (error) {
      console.log(error);
    }
  }

  async submitNew(stuff, stuffImage, user) {
    try {
      const response = await axios.post(
        `${api}/stuff`,
        { ...stuff, file: stuffImage },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      console.log(response);
      this.#closeDialog();
    } catch (error) {
      console.log(error);
    }
  }

  async submitUpdate(stuff, user) {
    try {
      const response = await axios.put(`${api}/stuff?id=${stuff._id}`, stuff, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response);
      this.#closeDialog();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id, user) {
    try {
      const response = await axios.delete(`${api}/stuff?id=${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
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

  #dispatchNotification() {}
}

const stuffController = new Stuff();
export { stuffController, Stuff };
