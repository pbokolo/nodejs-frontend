import axios from "axios";
import { open, close } from "./notifSlice";
const api = "http://localhost:4000/api/auth";

class Controller {
  #authDialog;
  initialState = { email: "", password: "", repassword: "" };

  constructor(authDialog) {
    this.#authDialog = authDialog;
  }

  handleSubmit(e, type, creds, setEditable, setCookies, dispatch) {
    e.preventDefault();
    setEditable(false);

    switch (type) {
      case "signin":
        this.#signin(creds, setCookies, dispatch);
        break;
      case "signup":
        this.#signup(creds);
        break;
      default:
        this.#signin(creds, setCookies, dispatch);
        break;
    }
  }

  async #signup(creds) {
    try {
      const response = await axios.post(`${api}/signup`, creds);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  async #signin(creds, setCookies, dispatch) {
    try {
      const response = await axios.post(`${api}/signin`, creds);
      const { userId, token } = response.data;
      setCookies("user", { userId, token }, { path: "/" });
      this.#authDialog.close();
      this.#showNotification(dispatch);
    } catch (error) {
      console.log(error);
    }
  }

  #showNotification(dispatch) {
    dispatch(open());
    setTimeout(() => dispatch(close()), 3000);
  }
}

export { Controller };
