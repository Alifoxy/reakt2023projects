import React from 'react';

import '../Add_style.css';

export const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className={'item3'}>
            <div>PostID: {id}</div>
            <div>Title: {title}</div>
            <div>Content: {body}</div>

        </div>
    );

}

