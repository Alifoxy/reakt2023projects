import {Comments} from "../Comments/Comments";
import {Posts} from "./Posts";
import React, {useState} from "react";

export const RunPosts = () => {
    const [commentId, setCommentId] = useState(null);

    return (
        <div>
            <div className={'main_block'}>
                <div className><Comments setCommentId={setCommentId}/></div>
                <div className>{commentId && <Posts commentId={commentId}/>}</div>
            </div>
        </div>
    );
};