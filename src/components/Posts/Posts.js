import React from 'react';
import { useEffect, useState } from "react";
import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";

export const Posts = ({commentId}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts.getAll(commentId).then(({data}) => setPosts([...data]))
    }, [commentId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};