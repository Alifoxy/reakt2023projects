import React from 'react';
import {useReducer, useRef} from "react";

import {Cats} from "./Animals";
import {Dogs} from "./Animals";



const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastCat] = state.cats.slice(-1);
            const catId = lastCat ? lastCat.id + 1 : 0;
            const cat_name = action.payload;
            return {...state, cats: [...state.cats, {id: catId,name:cat_name, breed: action.payload}]}
        case 'REMOVE_CAT':
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
            return {...state}
        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const dogId = lastDog ? lastDog.id + 1 : 0;
            const dog_name = action.payload;
            return {...state, dogs: [...state.dogs, {id: dogId, name: dog_name, breed:action.payload}]}
        case 'REMOVE_DOG':
            const indexDog = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(indexDog, 1)
            return {...state}
        default:
            return {...state}
    }

}
const RunApp = () => {
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
            <div>
                    <input type="text" ref={catInp} placeholder="name"/>
                    <input type="text" ref={catInp} placeholder="breed"/>
                    <button onClick={createCat} >Add new cat</button>
                    <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                    <input type="text" ref={dogInp} placeholder="name"/>
                    <input type="text" ref={dogInp} placeholder="breed"/>
                    <button onClick={createDog}>Add new dog</button>
                    <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>

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





