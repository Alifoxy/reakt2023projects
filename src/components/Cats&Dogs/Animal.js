import React from "react";

export const cat = () => {
    const {cat_name, cat_breed} = cat;
    return (
        <div className={'item2'}>
            <div>name:{cat_name}</div>
            <div>breed:{cat_breed}</div>
        </div>
    );

}
export const dog = () => {
    const {dog_name, dog_breed} = dog;
    return (
        <div className={'item2'}>
            <div>name:{dog_name}</div>
            <div>breed:{dog_breed}</div>
        </div>
    );

}