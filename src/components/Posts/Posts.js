import React from 'react';
import { useEffect, useState } from "react";
import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";

export const Posts = ({postID}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts.getAll(postID).then(({data}) => setPosts([...data]))
    }, [postID]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}

        </div>
    );
};