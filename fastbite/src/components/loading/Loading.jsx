import React from 'react';
import './Loading.css'

const Loading = () => {
    
    return (
        <div className='pacmanIconLoading bg-[#F9F5EA] w-full h-screen flex flex-col items-center justify-center'>
            <span className='mt-[10%] ml-5'>
                Checking...
            </span>
        </div>
    );
};

export default Loading;
