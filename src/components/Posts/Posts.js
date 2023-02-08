import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "./Post";
import {postActions} from "../../redux/slices/post_slice";



const Posts = () => {
    const dispatch = useDispatch();
    const {posts,errors,loading} = useSelector(state => state.posts);


    useEffect(() => {
        dispatch(postActions.getAll())
    }, []) ;


    return (
        <div>
            {loading && <h2>Loading, pls wait .............................</h2>}
            {errors && JSON.stringify(errors)}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}