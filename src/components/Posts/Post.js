import React from 'react';

import '../Add_style.css';

const Post = ({post}) =>{
        const {id, userId, title, body} = post
        return (
            <div className={'item2'}>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        )
    }


export {Post}

