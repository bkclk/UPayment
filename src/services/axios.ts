import axios from "axios"
import { baseURL } from "./endpoints"

export default axios.create({
    baseURL: baseURL
})