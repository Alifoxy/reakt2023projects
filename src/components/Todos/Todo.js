import React from 'react';
import '../Add_style.css';
export const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <div className={'item3'}>
            <div>id:{id}</div>
            <div>user_id:{userId}</div>
            <div>title:{title}</div>
            <div>status:{completed}</div>
        </div>
    );

}

