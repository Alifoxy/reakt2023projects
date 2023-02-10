import React from 'react';

import {Cars} from './components/Cars/Cars';

const App = () => {
    return (
        <div>
            <div><h2>Header</h2></div>
            <hr/>
            <div><h2>Cars</h2></div>
            <Cars/>
        </div>
    );
}


export default App;
