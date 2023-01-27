import React from 'react';
import { useEffect, useState } from "react";
// import {Comment} from "./Comment";
import {getComments} from "../../services/api/getInfo/getCommentsInfo";
import {useNavigate} from "react-router-dom";

export const Comments = () => {
    const navigate = useNavigate();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            {comments.map(item => {
                const {postId, id, name} = item;
                return (
                    <div key={id}>
                        <div>ID: {id}</div>
                        <div>PostID: {postId}</div>
                        <div>Comment Name: {name}</div>
                        <button onClick={() => navigate(postId.toString())}>Get Post</button>
                    </div>
                )
            })}
            {/*{comments.map(comment=><Comment key={comment.id} comment={comment}/>)}*/}
        </div>
    );
};