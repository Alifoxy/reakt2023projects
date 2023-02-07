import '../Add_style.css';

import React from 'react';

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={'item1'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
        </div>
    );
};

export {User};

