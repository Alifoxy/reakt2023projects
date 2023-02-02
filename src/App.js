import React from 'react';
import {Comments} from './components/Comments/Comments'
import {Posts} from "./components/Posts/Posts";

const App = () => {
    return (
        <div>
            <div><h2>Comments</h2></div>
            <Comments/>
            <hr/>
            <div><h2>Posts</h2></div>
            <Posts/>
        </div>
    );
}


export default App;
