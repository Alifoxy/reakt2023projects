import React from 'react';
import { useEffect, useState } from "react";
import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";
import {Comments} from "../Comments/Comments";

export const Posts = () => {
    const [commentId, setCommentId] = useState(null);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts.getAll(commentId).then(({data}) => setPosts([...data]))
    }, [commentId]);

    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
            <div className><Comments setCommentId={setCommentId}/></div>
            <div className>{commentId && <Posts commentId={commentId}/>}</div>
        </div>
    );
};