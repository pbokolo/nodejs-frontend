import axios from "axios";
const api = "http://localhost:4000/api/auth";
import { closeAuthDialog } from "./authSlice";

class Controller {
  #dispatch;
  initialState = { email: "", password: "", repassword: "" };
  constructor(dispatch) {
    this.dispatch = dispatch;
  }

  handleSubmit(e, type, creds, setEditable, setCookies) {
    e.preventDefault();
    setEditable(false);

    switch (type) {
      case "signin":
        this.#signin(creds, setCookies);
        break;
      case "signup":
        this.#signup(creds);
        break;
      default:
        this.#signin(creds);
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
  async #signin(creds, setCookies) {
    try {
      const response = await axios.post(`${api}/signin`, creds);
      const { userId, token } = response.data;
      setCookies("user", { userId, token }, { path: "/" });
    } catch (error) {
      console.log(error);
    }
  }
}

export { Controller };
