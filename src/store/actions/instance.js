import axios from "axios";

const instance = axios.create({
  baseURL: "https://junior-chemists-be-s2zll.ondigitalocean.app/",
});

export default instance;
