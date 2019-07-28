// src/containers/Root.jsx
console.log( "Mounting Root.jsx... <Root />" );

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App'

const Root = ( { store }  ) => {
    return ( 
        <div className="root">      
            <Provider store={ store }>  
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default Root;

// eof