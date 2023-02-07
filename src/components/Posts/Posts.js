import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";
import {postActions} from "../../redux/slices/post_slice";



const Posts = () => {
    const dispatch = useDispatch();
    const {posts} = useSelector(state => state.posts);


    useEffect(() => {
        getPosts.getAll().then(({data}) => dispatch(postActions.getAll(data)))
    }, []) ;


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}