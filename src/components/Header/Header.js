import React from 'react';
import {useSelector} from "react-redux";
const Header = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);
    return (
        <div>
            <div className={'item3'}>Selected user: {selectedUser && selectedUser.id} {selectedUser && selectedUser.name}</div>
            <div className={'item3'}>Selected post: {selectedPost && selectedPost.id} {selectedPost && selectedPost.title}</div>
        </div>
    );
};

export {Header}
