import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getPosts } from "../../services/api/getInfo/getPostsInfo";
import {RouterEndpoints} from "../../services/routes/routes";
import '../Add_style.css';

export const PostByCommentPage = () => {
    const {postId} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    useEffect(() => {
        if (postId) {
            getPosts.getPostById(postId).then(({data}) => setPost({...data}))
        }
    }, [postId])
    if (!post) return null;
    return (
        <div className={'post_style'}>
            <div className={'head_of_post'}>This comment belongs to the following post:</div>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>
            <div></div>
            <button onClick={() => navigate(`/${RouterEndpoints.comments}`)}>{'<'}Back</button>
        </div>
    );
};