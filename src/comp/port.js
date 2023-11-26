import React from 'react';
import { CiSearch } from "react-icons/ci";
import { IoLockOpenOutline } from "react-icons/io5";

const PortPoint = () => {
    return (
        <div>
            <div className='container mx-auto min-h-[100vh] justify-center mt-10 rounded-lg bg-gray-300 border-2 border-blue-400'>
                <div className='grid grid-cols-4 mt-10 justify-between'>
                    <div className='col-span-2' >
                            <div className='float-right  w-[70%] mr-3 bg-orange-200 border-2 border-orange-300 text-center p-3 rounded-md h-64' id='chat'>
                                    <div className='text-center text-6xl justify-center w-full flex text-orange-600'><CiSearch /></div>
                                    <p className=''>Find the best answer to your technical question, help others answer theirs</p>
                                    <button className='mt-5 rounded-md h-10 hover:bg-orange-500 bg-orange-400 px-5'>Join the community</button>
                                    <p className='mt-5 '>or <a className='underline cursor-pointer hover:text-orange-600'>search content</a></p>
                            </div>
                    </div>
                    <div className='col-span-2'>
                                <div className='w-[70%] ml-3 bg-blue-200 border-2 border-blue-300 text-center p-3 rounded-md h-64 
                                after:w-5 after:h-6 after:bg-blue-600 ' id='chat'>
                                    <div className='text-center text-6xl justify-center w-full flex text-blue-600'><IoLockOpenOutline /></div>
                                    <p className='mt-5'>Want a secure, private space for your technical knowledge?</p>
                                    <button className='rounded-md h-10 hover:bg-blue-500 bg-blue-400 px-5 mt-5'>Discover Teams</button>
                                 </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortPoint;