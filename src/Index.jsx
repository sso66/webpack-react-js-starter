// Index.jsx
console.info('Mounting Index.jsx ... <Index />')

import React from "react";
import { render } from "react-dom";
import Root from './components/Root';
import './styles/index.sass';
import startup from './utils/startup';

const init = function () {  
    render (
        <Root />, 
        document.getElementById('root')
    );
}
window.onload = init;

// eof