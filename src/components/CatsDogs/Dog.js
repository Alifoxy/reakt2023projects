import React from "react";

export const Dog = ({dog,dispatch}) => {
    const {id, name, breed} = dog;

    return (
        <div>
            {id}) {name} {breed}
            <button onClick={()=>dispatch({type:'DELETE_DOG', payload:id})}>delete</button>
        </div>
    );
};
