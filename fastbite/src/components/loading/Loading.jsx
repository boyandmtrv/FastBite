import React from 'react';
import './Loading.css'

const Loading = () => {
    
    return (
        <div className='pacmanIconLoading bg-[#F9F5EA] w-full h-screen flex flex-col items-center justify-center'>
            <span className='lg:mt-[10%] md:mt-[20%] sm:mt-[25%] min-[320px]:mt-[50%]'>
                Checking...
            </span>
        </div>
    );
};

export default Loading;
