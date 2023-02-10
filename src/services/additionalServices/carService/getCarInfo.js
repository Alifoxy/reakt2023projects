import {urls} from "../../../configs/urls";
import {axiosRequest} from "../../axiosService/axiosConfig";

export const getCars = {
    getAll: () => axiosRequest.get(urls.cars),
    create: (data) => axiosRequest.post(urls.cars.cars, data),
    updateById: (id, data) => axiosRequest.put(urls.cars.byId(id), data),
    deleteById: (id) => axiosRequest.delete(urls.cars.byId(id))
}