import React from 'react';
import '../Add_style.css';
export const Album = ({album}) => {
    const {id, userId, title} = album;
    return (
        <div className={'item1'}>
            <div>id:{id}</div>
            <div>user_id:{userId}</div>
            <div>title:{title}</div>
        </div>
    );

}

