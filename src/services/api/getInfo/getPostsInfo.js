import {axiosRequest} from "../../../axios/axiosConfig";
import { urls } from "../endpoints";

export const getPosts = {
    getPostById: (id) => axiosRequest.get(urls.postById(id))
}