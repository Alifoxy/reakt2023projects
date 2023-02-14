import React from 'react';

import {useSelector} from "react-redux";

import {Cars} from './components/Cars/Cars';
import {Header} from "./components/Header/Header";

const App = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div>
            <Header/>
            <hr/>
            {loading && <h1>Loading..................</h1>}
            <Cars/>
        </div>
    );
}


export default App;
