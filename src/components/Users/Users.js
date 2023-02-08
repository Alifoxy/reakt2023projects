import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "./User";
import {userActions} from "../../redux/slices/user_slice";

const Users = () => {
const dispatch = useDispatch();
const {users,errors,loading} = useSelector(state => state.users);


    useEffect(() => {
        (dispatch(userActions.getAll()))
    }, []) ;


    return (
        <div>
            {loading && <h2>Loading, pls wait .............................</h2>}
            {errors && JSON.stringify(errors)}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users}