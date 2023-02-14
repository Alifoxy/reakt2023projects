import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {carActions} from "../../redux/slices/car_slice";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars,errors} = useSelector(state => state.cars);

    useEffect(() => {
        (dispatch(carActions.getAll()))
    }, [dispatch]) ;

    return (
        <div>
            {errors && JSON.stringify(errors)}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars}