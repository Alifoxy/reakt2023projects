import {axiosRequest} from "../../axios/axiosConfig";
import {urls} from "../endpoints";

export const getComments = {
    getAll: () => axiosRequest.get(urls.comments),
    addComment: (data) => axiosRequest.post(urls.comments, data)
}