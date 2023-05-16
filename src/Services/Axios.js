import axios from "axios";
import { baseUrl } from "../Utility/Constants";

const instance = axios.create({
    baseURL:baseUrl
})

export default instance