import React from 'react';
import {Component} from "react";

import '../Add_style.css';

class Comment extends Component{

    render(){
        const {id, postId, name} = this.props.comment;
        return (
            <div className={'item2'}>
                <div>id:{id}</div>
                <div>PostID:{postId}</div>
                <div>name:{name}</div>
            </div>
        );
    }
}
export {Comment}

