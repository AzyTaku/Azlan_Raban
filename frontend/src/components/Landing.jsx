import React from "react";
import { FaGithub, FaLinkedin, FaInfoCircle } from "react-icons/fa";

const Landing = () => {
    return (
        <>
            <div className="flex flex-col space-y-4 pt-20 px-6  sm:px-10">
                {/* First line */}
                <h1 className="text-4xl font-kodemono text-white">Hello, I'm</h1>
                <h2 className="text-6xl font-kodemono font-bold text-txcolor1">
                    Azlan
                </h2>
                <h3 className="text-6xl font-kodemono font-bold text-txcolor1">
                    Raban
                </h3>

                <h1 className="text-2xl font-kodemono text-white text-center max-w-3xl mx-auto">
                    I’m a passionate software engineer, dedicated to crafting innovative
                    and impactful digital experiences.
                </h1>

                {/* Icons for small screens */}
                <div className="flex flex-row justify-center space-x-4 mt-6 md:hidden block">
                    <div
                        className="h-16 w-16 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://github.com/AzyTaku"}
                    >
                        <FaGithub className="text-4xl" />
                    </div>
                    <div
                        className="h-16 w-16 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://www.linkedin.com/in/azlan-raban-2248991b9/"}
                    >
                        <FaLinkedin className="text-4xl" />
                    </div>
                    <a href="/">
                        <div className="h-16 w-16 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110">
                            <FaInfoCircle className="text-4xl" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Icons for  larger screens) */}
            <div className="absolute bottom-8 right-8 hidden md:flex flex-col space-y-4 z-10">
                <div
                    className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                    onClick={() => window.location.href = "https://github.com/AzyTaku"}
                >
                    <FaGithub className="text-6xl" />
                </div>
                <div
                    className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                    onClick={() => window.location.href = "https://www.linkedin.com/in/azlan-raban-2248991b9/"}
                >
                    <FaLinkedin className="text-6xl" />
                </div>
                <a href="/">
                    <div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110">
                        <FaInfoCircle className="text-6xl" />
                    </div>
                </a>
            </div>
        </>
    );
};

export default Landing;
