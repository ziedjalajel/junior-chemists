import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.127:8000",
});

export default instance;
