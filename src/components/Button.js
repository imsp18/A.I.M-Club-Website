import React, { useState } from 'react';

const Button = ({title,logo}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={`bg-primary flex flex-row rounded-lg max-sm:rounded-md items-center cursor-pointer gap-1 max-sm:px-2 max-sm:py-0  px-4 py-2 hover:scale-105 ease-out duration-100`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="font-semibold text-lg max-sm:text-[12px] text-white font-outfit">
                {title}
            </div>
            <img
                src={logo}
                alt="logo"
                className={` max-sm:w-4 max-sm:h-4 w-6 h-6 transform ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}
            />
        </div>
    );
}

export default Button;
