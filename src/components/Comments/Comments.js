import React from 'react';
import { useEffect, useState } from "react";
import {Comment} from "./Comment";
import {getComments} from "../../services/api/getInfo/getCommentsInfo";
import {Posts} from "../Posts/Posts";

export const Comments = () => {
    const [commentId, setCommentId] = useState(null);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            <div className><Comments setCommentId={setCommentId}/></div>
            <div className>{commentId && <Posts commentId={commentId}/>}</div>
        </div>
    );
};