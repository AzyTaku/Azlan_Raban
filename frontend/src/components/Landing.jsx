import React from 'react';
import { FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';

const Landing = () => {
    return (
        <>
            <div className="flex flex-col space-y-4 pt-20">
                {/* First line */}
                <h1 className="text-4xl font-kodemono text-white">Hello, I'm</h1>

                {/* Second line with larger text */}
                <h2 className="text-6xl font-kodemono font-bold text-txcolor1">Azlan</h2>

                {/* Third line */}
                <h3 className="text-6xl font-kodemono font-bold text-txcolor1">Raban</h3>

                {/* Description line */}
                <h1 className="text-2xl font-kodemono text-white text-justify max-w-3xl">
                    I’m a passionate software engineer, dedicated to crafting innovative and impactful solutions.
                </h1>
            </div>

            {/* Section for small boxes at bottom right */}
            <div className="absolute bottom-8 right-8 flex flex-col space-y-4 z-10">
                {/* Small Box 1 (GitHub Icon) */}
                <div
                    className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                    onClick={() => window.location.href = "https://github.com/AzyTaku"}
                >
                    <FaGithub className="text-6xl" />
                </div>

                {/* Small Box 2 (LinkedIn Icon) */}
                <div
                    className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                    onClick={() => window.location.href = "https://www.linkedin.com/in/azlan-raban-2248991b9/"}
                >
                    <FaLinkedin className="text-6xl" />
                </div>

                {/* Small Box 3 (Information Icon) */}
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
