import axios from "axios";
const api = "http://localhost:4000/api/stuff";

class Stuff {
  constructor() {}

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

export { stuffController };
