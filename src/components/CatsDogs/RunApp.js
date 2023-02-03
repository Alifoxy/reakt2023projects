import React from 'react';
import { useState } from "react";

import {AnimForm} from "./AddAnimal";
import {Dogs} from "./Animals";
import {Cats} from "./Animals";

export const RunApp = () => {
    const [setCats] = useState([]);
    const [setDogs] = useState([]);

    return (
        <div>
            <div className={'main_block'}>
                <AnimForm setCats={setCats}/>
                <Cats/>
                <hr/>
                <AnimForm setDogs={setDogs}/>
                <Dogs/>

            </div>
        </div>
    );
};