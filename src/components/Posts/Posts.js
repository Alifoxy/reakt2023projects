import React from 'react';
import {Component} from "react";

import {Post} from "./Post";
import {getPosts} from "../../services/api/getInfo/getPostsInfo";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }
    componentDidMount() {
        getPosts.getAll().then(({data})=>this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts}