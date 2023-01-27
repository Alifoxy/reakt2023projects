import axios from "axios";
import {baseURL} from "../services/api/endpoints";

export const axiosRequest = axios.create({baseURL})