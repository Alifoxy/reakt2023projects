import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators/carValidator";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/car_slice";
import {useEffect} from "react";

const Form = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    const create = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand&&<span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price&&<span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year&&<span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'create'}</button>
        </form>
    );
};

export {Form};
