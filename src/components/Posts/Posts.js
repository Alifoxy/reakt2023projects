import React from 'react';
import { useEffect, useState } from "react";
import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts.getAll().then(({data}) => setPosts([...data]))
    }, []);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};