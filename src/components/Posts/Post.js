import React from 'react';
import '../Add_style.css';

export const Post = ({post}) => {
    const {postId} = post;
    return (
        <div className={'item2'}>
            <div>PostID: {postId}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.body}</div>

        </div>
    );

}

