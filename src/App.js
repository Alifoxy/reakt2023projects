import React from 'react';
import {Users} from './components/Users/Users';
import {Posts} from "./components/Posts/Posts";
import {Header} from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <div><h2>Header</h2></div>
            <Header/>
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
