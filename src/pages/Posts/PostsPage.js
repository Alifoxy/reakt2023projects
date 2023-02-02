import React from 'react';
import {Outlet} from "react-router-dom";
import '../Add_style.css';
import {Posts} from "../../components/Posts/Posts";

export const PostsPage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Posts</h2>
            <Outlet />
            <Posts/>

        </div>
    );
};