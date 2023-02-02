import React from 'react';
import {AnimalForm} from "../../components/Cats&Dogs/NewAnimalForm";
import '../Add_style.css';
import { Outlet } from "react-router-dom";

const AnimalsPage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Animals</h2>
            <Outlet />
            <AnimalForm/>
        </div>
    );
};

export default AnimalsPage;