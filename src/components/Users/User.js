import '../Add_style.css';

import React from 'react';
import {useDispatch} from "react-redux";

const User = ({user}) => {
    const {id, name, username} = user;
    const dispatch = useDispatch();
    return (
        <div className={'item1'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button>select</button>
        </div>
    );
};

export {User};

