import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {userActions} from "../../redux/slices/user_slice";

const Cars = () => {
const dispatch = useDispatch();
const {users,errors,loading} = useSelector(state => state.users);


    useEffect(() => {
        (dispatch(userActions.getAll()))
    }, []) ;


    return (
        <div>
            {loading && <h2>Loading, pls wait .............................</h2>}
            {errors && JSON.stringify(errors)}
            {users.map(user => <Car key={user.id} user={user}/>)}
        </div>
    );
};

export {Cars}