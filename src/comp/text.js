import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const TestBar = () => {
    const [name,setName] = useState(true);
    function Bapon(){

        setName(name => !name);
    }
    const Nariis = name ? "invisible":"visible";
    return (
        <div>
            <button className={twMerge("bg-blue-500",)} onClick={Bapon}>Submit</button>
            <div><p className={twMerge('bg-red-400',Nariis)} id='marko'>Bapon </p></div>
        </div>
    );
};

export default TestBar;