import React from 'react';
import '../Add_style.css';
import {useNavigate} from "react-router-dom";

export const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id, postId, name} = comment;
    return (
        <div className={'item2'}>
            <div>id:{id}</div>
            <div>post_id:{postId}</div>
            <div>name:{name}</div>
            <button onClick={() => navigate(postId.toString())}>Get Post</button>
        </div>
    );

}

