import {useDispatch} from "react-redux";

import '../Add_style.css';
import {carActions} from "../../redux/slices/car_slice";

const Car = ({user}) => {
    const {id, name, username} = user;
    const dispatch = useDispatch();
    return (
        <div className={'item1'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={()=>dispatch(carActions.set_selectedUser(user))}>select</button>
            <button onClick={()=>dispatch(carActions.getById({id}))}>api select</button>
        </div>
    );
};

export {Car};

