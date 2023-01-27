import React from 'react';
import { useEffect, useState } from "react";
import {Album} from "./Album";
import {getAlbums} from "../../services/api/getInfo/getAlbumsInfo";

export const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums.getAll().then(({data}) => setAlbums([...data]))
    }, []);

    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};