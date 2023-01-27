import {axiosRequest} from "../../../axios/axiosConfig";
import {urls} from "../endpoints";

export const getTodos = {
    getAll: () => axiosRequest.get(urls.todos),
    addTodos: (todo) => axiosRequest.post(urls.todos, todo),
}