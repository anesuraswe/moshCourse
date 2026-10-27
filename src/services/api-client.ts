import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "api-key": "...", //Not required here since we are using a fake backend
  },
});

export { CanceledError };
