import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="bg-pacBg">
            <div className='flex flex-col w-full h-screen text-center items-center justify-center backdrop-blur-md '>
                <h1 className="text-4xl font-bold ">404</h1>
                <p className="text-lg mt-4">Sorry, the page you are looking for does not exist.</p>
                <Link className='mt-5 border text-white bg-[#FFB897] hover:text-[#000] hover:bg-[#f7d7c9] duration-500 rounded-full w-56 h-12 items-center justify-center flex text-xl' to='/'>Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;
