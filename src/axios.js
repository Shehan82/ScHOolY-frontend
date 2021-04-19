import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9001",

  // baseURL: "https://myschooly.herokuapp.com",
});

export default instance;
