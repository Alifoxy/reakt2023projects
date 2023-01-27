import {axiosRequest} from "../../../axios/axiosConfig";
import {urls} from "../endpoints";

export const getAlbums = {
    getAll: () => axiosRequest.get(urls.albums),
    addAlbum: (data) => axiosRequest.post(urls.albums, data),
}