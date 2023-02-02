import React from 'react';
import { useForm } from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {animalValidator} from "../../validators/animalValidator";


export const CatForm = () => {
    const { register, handleSubmit, reset, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(animalValidator)});

    const submit1 = async () => {
        createCat({cat}).then(({cat}) => setCat((prevState) => [...prevState, cat]))
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit1)}>
                <input type="text" placeholder="name" {...register('name')}/>
                {errors.cat_name&&<span>{errors.cat_name.message}</span>}
                <input type="text" placeholder="breed" {...register('breed')}/>
                {errors.cat_breed&&<span>{errors.cat_breed.message}</span>}
                <button disabled={!isValid}>Add new cat</button>
            </form>;
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="name" {...register('name')}/>
                {errors.dog_name&&<span>{errors.dog_name.message}</span>}
                <input type="text" placeholder="breed" {...register('breed')}/>
                {errors.dog_breed&&<span>{errors.dog_breed.message}</span>}
                <button disabled={!isValid}>Add new dog</button>
            </form>;
        </div>
    );
};