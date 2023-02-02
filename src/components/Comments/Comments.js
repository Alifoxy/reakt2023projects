import React from 'react';
import {Component} from "react";

import {Comment} from "./Comment";
import {getComments} from "../../services/api/getInfo/getCommentsInfo";

class Comments extends Component{
        constructor(props) {
            super(props);
            this.state = {comments:[]}
        }
        componentDidMount() {
            getComments.getAll().then(({data})=>this.setState({comments:[...data]}))
        }
        render() {
            return (
                <div>
                    {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

                </div>
            );
        }
    }
export {Comments}