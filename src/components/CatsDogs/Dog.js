import React from "react";

export const Dog = ({dog,dispatch}) => {
    const {id, name, breed} = dog;

    return (
        <div>
            <div>dogID:{id})</div>
            <div>name:{name}</div>
            <div>breed:{breed}</div>
            <button onClick={()=>dispatch({type:'REMOVE_DOG', payload:id})}>delete</button>
        </div>
    );
};

