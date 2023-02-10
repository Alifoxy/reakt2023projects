import {useDispatch} from "react-redux";

import '../Add_style.css';
import {carActions} from "../../redux/slices/car_slice";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();
    return (
        <div className={'item1'}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.set_updateCar(car))}>select</button>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>api select</button>
        </div>
    );
};

export {Car};

