import React from 'react';
import { useForm } from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {animalValidator} from "../../validators/animalValidator";
import {useReducer, useRef} from "react";
import {Cats} from "./Animals";
import {Dogs} from "./Animals";



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastCat] = state.cats.slice(-1);
            const catId = lastCat ? lastCat.id + 1 : 0;
            return {...state, cats: [...state.cats, {id: catId, name: action.payload}]}
        case 'REMOVE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
            return {...state}
        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const dogId = lastDog ? lastDog.id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id: dogId, name: action.payload}]}
        case 'REMOVE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}
    }

}
const RunApp = () => {
    const { register, handleSubmit, formState:{errors,isValid}} = useForm({mode: 'all',resolver:joiResolver(animalValidator)});
    const catInp = useRef();
    const dogInp = useRef();
    const [state, dispatch] = useReducer(reducer, {cats:[], dogs:[]}, (data)=>data);

    const createCat = () => {
        dispatch({type:'ADD_CAT', payload:catInp.current.value})
        catInp.current.value = ''
    };

    const createDog = () => {
        dispatch({type:'ADD_DOG', payload:dogInp.current.value})
        dogInp.current.value = ''
    };

    return (
        <div>
            <form onSubmit={handleSubmit(createCat)}>
                <input type="text" ref={catInp} placeholder="name" {...register('name')}/>
                {errors.cat_name&&<span>{errors.cat_name.message}</span>}
                <input type="text" placeholder="breed" {...register('breed')}/>
                {errors.cat_breed&&<span>{errors.cat_breed.message}</span>}
                <button disabled={!isValid}>Add new cat</button>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </form>;
            <form onSubmit={handleSubmit(createDog)}>
                <input type="text" ref={dogInp} placeholder="name" {...register('name')}/>
                {errors.dog_name&&<span>{errors.dog_name.message}</span>}
                <input type="text" placeholder="breed" {...register('breed')}/>
                {errors.dog_breed&&<span>{errors.dog_breed.message}</span>}
                <button disabled={!isValid}>Add new dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </form>;
        </div>
    );

    // return (
    //     <div>
    //         <div>
    //             <input type="text" ref={catInp}/>
    //             <button onClick={createCat}>createCat</button>
    //             <Cats cats={state.cats} dispatch={dispatch}/>
    //         </div>
    //         <div>
    //             <input type="text" ref={dogInp}/>
    //             <button onClick={createDog}>createDog</button>
    //             <Dogs dogs={state.dogs} dispatch={dispatch}/>
    //         </div>
    //     </div>
    // );
};

export {RunApp};





