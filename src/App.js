import React from 'react';
import {Comments} from './components/Comments/Comments'
import {Posts} from "./components/Posts/Posts";
import {RunApp} from "./components/DOGCATS/RunApp";

const App = () => {
    return (
        <div>
            <RunApp/>
            <hr/>
            <div><h2>Comments</h2></div>
            <Comments/>
            <hr/>
            <div><h2>Posts</h2></div>
            <Posts/>
        </div>
    );
}


export default App;
