import React from 'react';
import {Comments} from './components/Comments/Comments'
import {Posts} from "./components/Posts/Posts";

const App = () => {
    return (
        <div>
            <Comments/>
            <hr/>
            <Posts/>
        </div>
    );
}


export default App;
