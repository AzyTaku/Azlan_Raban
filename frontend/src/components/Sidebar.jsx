import React from 'react';
import SolarFire from '../assets/solar_fire.png';

const Sidebar = ({ activeSection }) => {
    return (
        <div className="fixed left-0 top-0 h-full w-1/5 bg-bgcolor1 text-white p-4 shadow-lg lg:block hidden">
            {/* Logo Section */}
            <a href="/" className="w-[30%]">
                <div className="flex justify-center">
                    <img src={SolarFire} alt="SolarFire Logo" className="w-[51px] h-[51px]" />
                </div>
            </a>
            <div className='pt-32'></div>

            {/* Navigation Menu */}
            <ul className="space-y-4 items-center text-center hover:cursor-pointer font-kodemono font-semibold">
                {['home', 'about', 'exp', 'tech', 'contact'].map((section) => ( //'work'
                    <li
                        key={section}
                        className={`p-2 rounded ${activeSection === section ? 'text-txcolor1' : 'text-white'} hover:text-txcolor1 transition-all duration-300`}
                    >
                        <a href={`#${section}`}>{section.charAt(0).toUpperCase() + section.slice(1)}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
