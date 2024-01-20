import { data } from "autoprefixer";
import axios from "axios"
const url = "http://localhost:3000/api/"
export const GET = async (path, config) => await axios.get(url + path, config);
export const POST = async (path, data, config) => await axios.post(url + path, data, config);
export const UPDATE = async (path, config) => await axios.patch(url + path, data, config);
export const DELETE = async (path, config) => await axios.delete(url + path, config); 