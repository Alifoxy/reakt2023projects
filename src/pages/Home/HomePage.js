import React from 'react';

import Home from "../../components/Home/Home";
import '../Add_style.css';

const HomePage = () => {
    return (
        <div>
            <h2 className={'name_of_page'}>Home</h2>
            <Home/>
        </div>
    );
};

export default HomePage;