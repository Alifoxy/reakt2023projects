import React from "react";

export const Cat = ({cat,dispatch}) => {
    const {id, name, breed} = cat;

    return (
        <div>
            <div>catID:{id}</div>
            <div>name:{name}</div>
            <div>breed:{breed}</div>
            <button onClick={()=>dispatch({type:'REMOVE_CAT', payload:id})}>delete</button>
        </div>
    );
};


export const Dog = ({dog,dispatch}) => {
    const {id, name, breed} = dog;

    return (
        <div>
            <div>dogID:{id}</div>
            <div>name:{name}</div>
            <div>breed:{breed}</div>
            <button onClick={()=>dispatch({type:'REMOVE_DOG', payload:id})}>delete</button>
        </div>
    );
};