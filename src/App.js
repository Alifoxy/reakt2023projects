import React from 'react';

import {useSelector} from "react-redux";

import {Cars} from './components/Cars/Cars';
import {Form} from "./components/Form/Form";

const App = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Form/>
            <hr/>
            {loading && <h2>Loading, pls wait .............................</h2>}
            <Cars/>
        </div>
    );
}


export default App;
