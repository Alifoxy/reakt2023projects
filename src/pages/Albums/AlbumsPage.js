import React from 'react';
import {Albums} from "../../components/Albums/Albums";
import '../Add_style.css';

const AlbumsPage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Albums</h2>
            <Albums/>
        </div>
    );
};

export default AlbumsPage;