import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices/post_slice";
import '../Add_style.css';

const Post = ({post}) =>{
    const {id, userId, title, body} = post
    const dispatch = useDispatch();
    return (
        <div className={'item2'}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={()=>dispatch(postActions.set_selectedPost(post))}>select</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>api select</button>
        </div>
    )}


export {Post}

