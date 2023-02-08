import {axiosRequest} from "../../axios/axiosConfig";
import { urls } from "../endpoints";

export const getPosts = {
    getAll: () => axiosRequest.get(urls.posts),
    getById: (id) => axiosRequest.get(`${urls.posts}/${id}`),
}