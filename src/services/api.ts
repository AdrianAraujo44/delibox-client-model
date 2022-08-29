import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.40.105:5000/api/v1"
})