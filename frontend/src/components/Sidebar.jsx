import React from "react";
import SolarFire from "../assets/solar_fire.png";

const Sidebar = ({ activeSection }) => {
    const sections = ["home", "about", "exp", "tech", "contact"]; //work

    return (
        <div className="fixed left-0 top-0 h-full w-1/5 bg-bgcolor1 text-white p-4 shadow-lg lg:block hidden">
            <a href="/" className="flex justify-center">
                <img src={SolarFire} alt="SolarFire Logo" className="w-[51px] h-[51px]" />
            </a>

            <ul className="pt-32 space-y-4 text-center font-kodemono font-semibold">
                {sections.map((section) => (
                    <li
                        key={section}
                        className={`p-2 rounded transition-all duration-300 ${activeSection === section ? "text-txcolor1" : "text-white hover:text-txcolor1"
                            }`}
                    >
                        <a
                            href={`#${section}`}
                            className="block w-full h-full"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
