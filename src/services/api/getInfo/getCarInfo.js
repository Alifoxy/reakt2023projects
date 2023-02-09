import {baseURL} from "../endpoints";
import {urls} from "../endpoints";
import {axiosRequest} from "../../axios/axiosConfig";

export const getPosts = {
    getAll: () => axiosRequest.get(urls.cars),
    getById: (id) => axiosRequest.get(`${urls.cars}/${id}`),
}