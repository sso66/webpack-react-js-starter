// Header.jsx
console.log( "Mounting Header.jsx <Header />...");

import React from 'react';

const header =
    <div className='header'>
        <h1>Header</h1>
        <p>
            The golden rule of knowing what you are doing is to 
            understand why you are doing it.
        </p> 
        <p>
            Don't use a module until you understand 
            the problem it's solving
        </p>
    </div>
;
const Header = () => {

    return ( header );

};

export default Header;