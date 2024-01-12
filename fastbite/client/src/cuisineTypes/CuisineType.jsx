import { RiCloseLine } from "react-icons/ri";
import cuisineTypes from "./cuisineTypesData";

const CuisineType = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center flex-col justify-center">
            <div className="cuisine-modal p-4 lg:w-[700px] md:w-[700px] sm:w-[700px] text-black
     min-[320px]:w-full bg-[#F9F5EA] shadow-[#000000c9] shadow-2xl border-black rounded-lg">
                <div className="flex flex-row justify-end">
                    <button className="text-2xl" onClick={onClose}>
                        <RiCloseLine />
                    </button>
                </div>
                <div className="flex flex-col items-start ml-5">
                    {cuisineTypes.map((cuisine, index) => (
                        <li key={index}>{cuisine}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CuisineType;
