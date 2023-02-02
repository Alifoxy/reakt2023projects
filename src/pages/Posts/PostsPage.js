import React from 'react';
import {Outlet} from "react-router-dom";
import '../Add_style.css';
import {RunPosts} from "../../components/Posts/RunPosts";

const PostsPage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Posts</h2>
            <Outlet />
            <RunPosts/>

        </div>
    );
};

export default PostsPage