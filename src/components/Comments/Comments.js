import React from 'react';
import { useEffect, useState } from "react";
import {Comment} from "./Comment";
import {getComments} from "../../services/api/getInfo/getCommentsInfo";

export const Comments = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments.getAll().then(({data}) => setComments([...data]))
    }, []);

    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};