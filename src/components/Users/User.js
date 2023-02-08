import '../Add_style.css';
import {userActions} from "../../redux/slices/user_slice";
import {useDispatch} from "react-redux";

const User = ({user}) => {
    const {id, name, username} = user;
    const dispatch = useDispatch();
    return (
        <div className={'item1'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={()=>dispatch(userActions.set_selectedUser(user))}>select</button>
        </div>
    );
};

export {User};

