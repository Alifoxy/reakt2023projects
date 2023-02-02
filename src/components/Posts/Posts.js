import React from 'react';
import { useEffect, useState } from "react";
import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";

export const Posts = ({id}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts.getAll(id).then(({data}) => setPosts([...data]))
    }, [id]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};