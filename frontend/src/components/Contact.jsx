import React from 'react';
import { FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <div className="relative flex flex-col space-y-4 pt-20">
                {/* First line  */}
                <h1 className="text-4xl font-kodemono text-white">Contact</h1>

                <div className="flex space-x-8">

                    <div className="h-[550px] w-[500px] font-kodemono border-2 border-black rounded p-6 space-y-4 relative">
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-sm p-2 rounded-md shadow-lg">
                            Backend Under Construction
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-white">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="bg-black text-white p-2 rounded mt-2"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="bg-black text-white p-2 rounded mt-2"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-white">Message</label>
                            <textarea
                                id="message"
                                className="bg-black text-white p-2 rounded mt-2"
                                placeholder="Enter your message"
                                rows="8"
                            />
                        </div>
                        <a href="mailto:azlanshaveenraban@gmail.com"
                            className="mt-4 flex justify-center bg-gray-900 text-white p-4 rounded-md shadow-lg hover:bg-gray-700 transition duration-200">
                            <p className="text-center font-semibold">Or Email me at azlanshaveenraban1@gmail.com</p>
                        </a>
                    </div>
                </div>

                {/* Icons (small screens) */}
                <div className="flex flex-row justify-center space-x-4 mt-6 md:hidden">
                    <div className="h-16 w-16 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://github.com/AzyTaku"}
                    >
                        <FaGithub className="text-4xl" />
                    </div>

                    <div className="h-16 w-16 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://www.linkedin.com/in/azlan-raban-2248991b9/"} >
                        <FaLinkedin className="text-4xl" />
                    </div>

                    <a href="/">
                        <div className="h-16 w-16 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110">
                            <FaInfoCircle className="text-4xl" />
                        </div>
                    </a>
                </div>

                {/* Icons (larger screens) */}
                <div className="absolute bottom-8 right-8 hidden md:flex space-x-4 z-10">
                    <div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://github.com/AzyTaku"}
                    >
                        <FaGithub className="text-6xl" />
                    </div>

                    <div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://www.linkedin.com/in/azlan-raban-2248991b9/"} >
                        <FaLinkedin className="text-6xl" />
                    </div>

                    <a href="/">
                        <div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110">
                            <FaInfoCircle className="text-6xl" />
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
