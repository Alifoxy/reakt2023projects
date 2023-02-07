import {axiosRequest} from "../../axios/axiosConfig";
import { urls } from "../endpoints";

export const getUsers = {
    getAll: () => axiosRequest.get(urls.users),
    getById: (id) => axiosRequest.get(`${urls.users}/${id}`),
}