import axios from "axios";

const instance = axios.create({
  baseURL: "https://junior-chemists-be-bl7l7.ondigitalocean.app/",
});

export default instance;
