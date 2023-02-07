import React from 'react';
import {Users} from './components/Users/Users';
import {Posts} from "./components/Posts/Posts";

const App = () => {
    return (
        <div>
            <hr/>
            <div><h2>Users</h2></div>
            <Users/>
            <hr/>
            <div><h2>Posts</h2></div>
            <Posts/>
        </div>
    );
}


export default App;
