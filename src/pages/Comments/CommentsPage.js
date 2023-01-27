import React from 'react';
import {Comments} from "../../components/Comments/Comments";
import '../Add_style.css';

const CommentsPage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Comments</h2>
            <Comments/>
        </div>
    );
};

export default CommentsPage;