import React from 'react';
import '../Add_style.css';

export const Post = ({post}) => {
    const {postId, title, body} = post;
    return (
        <div className={'item2'}>
            <div>PostID: {postId}</div>
            <div>Title: {title}</div>
            <div>Content: {body}</div>

        </div>
    );

}

