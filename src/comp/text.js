import React, { useState } from 'react';

const TestBar = () => {
    const [name,setName] = useState();
    function Bapon(){
        setName("text-white");
    }
    return (
        <div>
            <div><p className='bg-red-400$' id='marko'>bapon is a </p></div>
            <button className='' onClick={Bapon}>Submit</button>
        </div>
    );
};

export default TestBar;