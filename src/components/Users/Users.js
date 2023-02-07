import React, {useEffect} from 'react';
import {getUsers} from "../../services/api/getInfo/getUsersInfo";
import {userActions} from "../../redux/slices/user_slice";
import {useDispatch, useSelector} from "react-redux";

import {User} from "./User";

const Users = () => {
const dispatch = useDispatch();
const {users} = useSelector(state => state.users);


    useEffect(() => {
        getUsers.getAll().then(({data}) => dispatch(userActions.getAll(data)))
    }, []) ;


    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users}