import {axiosRequest} from "../../../axios/axiosConfig";
import { urls } from "../endpoints";

export const getPosts = {
    getAll: () => axiosRequest.get(urls.posts),
    addPost: (data) => axiosRequest.post(urls.posts, data)
}