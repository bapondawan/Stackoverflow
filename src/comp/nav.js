import React from 'react';
import { CiCircleList } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";



const NavBar = () => {

    function Bhover(){
        const elem = document.querySelector("#bhover");
        const eleme = elem.className;
        eleme === "invisible"? elem.className="visible":elem.className="invisible";
    }
    return (
        <div>
            <div className='container bg-blue-100 w-full h-16 border-2 border-blue-500  m-auto py-3'>
                    <div className='grid grid-cols-9'>
                        <div className='col-span-1 relative text-3xl'><button onClick={Bhover}><CiCircleList /></button>
                        <div className='invisible' id='bhover'>
                        <div className='absolute w-40 bg-blue-200 text-md mt-3 ml-0 border-2 border-blue-700' id=''>
                            <ul>
                                <li className='pl-2 text-sm hover:bg-red-300 cursor-pointer'>Home</li>
                                <li className='pl-2 text-sm hover:bg-red-300 cursor-pointer'>About</li>
                                <li className='pl-2 text-sm hover:bg-red-300 cursor-pointer'>Max Transaction</li>
                                <li className='pl-2 text-sm hover:bg-red-300 cursor-pointer'>Middle</li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div className='col-span-1 hover:text-blue-600'><p>StackOverFlow</p></div>
                        <div className='col-span-2'>
                            <ul>
                                <li className='float-left mx-4 hover:bg-red-300 rounded-xl px-2 py-1 cursor-pointer text-sm group'>About
                                            <div className='group-hover:block absolute w-24 m-0 -ml-3 mt-1  bg-blue-200 hidden'>
                                                <ul>
                                                    <li className='pt-2 border-b-2 border-red-300 hover:bg-red-300 pl-2'>Address</li>
                                                    <li className='pt-2 border-b-2 border-red-300 hover:bg-red-300 pl-2'>Company</li>
                                                    <li className='pt-2 border-b-2 border-red-300 hover:bg-red-300 pl-2'>Career</li>
                                                    <li className='pt-2 border-b-2 border-red-300 hover:bg-red-300 pl-2'>Offer's</li>
                                                </ul>
                                            </div>
                                </li>
                                <li className='float-left mx-4 hover:bg-red-300 rounded-xl px-2 py-1 cursor-pointer text-sm'>Home</li>
                                <li className='float-left mx-4 hover:bg-red-300 rounded-xl px-2 py-1 cursor-pointer text-sm'>Machine</li>
                            </ul>
                        </div>
                        <div className='col-span-4'>
                            <div className='w-full h-8   my-auto hover:shadow-md focus-within:outline-red-400 focus-within:shadow-red-400 hover:shadow-blue-400 outline-double outline-blue-500 rounded-md text-center mx-auto'>
                            <div className='ml-3 w-[4%] float-left'><CiSearch /></div>
                            <input type='text' className='w-[90%] mt-1 outline-none bg-blue-100 float-left'/>
                            </div>
                        </div>
                        <div className='col-span-1 ml-2'>
                            <button className='bg-blue-200 hover:bg-blue-300 mr-1 rounded-md border-2 border-blue-300 px-1 h-8'>Log in</button>
                            <button className='bg-blue-600 hover:bg-blue-300 mr-1 text-white hover:text-black rounded-md border-2 border-blue-300 px-1  h-8'>Sign up</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default NavBar;