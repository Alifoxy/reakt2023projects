import React from 'react';
import '../Add_style.css';
import {useNavigate} from "react-router-dom";

export const Post = ({comment}) => {
    const navigate = useNavigate();
    const {id, postId, name} = comment;
    return (
        <div className={'item2'}>
            <div>id:{id}</div>
            <div>PostID:{postId}</div>
            <div>name:{name}</div>
            <button onClick={() => navigate(postId.toString())}>Get Post</button>
        </div>
    );

}

