import React from 'react';

import '../Add_style.css';


export const Comment = ({comment}) => {
    const {id, postId, name} = comment;
    return (
        <div className={'item2'}>
            <div>id:{id}</div>
            <div>PostID:{postId}</div>
            <div>name:{name}</div>
        </div>
    );

}

