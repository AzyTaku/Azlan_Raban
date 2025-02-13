import React from 'react';
import { FaGithub, FaLinkedin, FaInfoCircle } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <div className="relative flex flex-col space-y-4 pt-20">
                {/* First line */}
                <h1 className="text-4xl font-kodemono text-white">Contact</h1>

                {/* Flex container for side-by-side boxes */}
                <div className="flex space-x-8">

                    {/* First Box (Form) */}
                    <div className="h-[550px] w-[500px] font-kodemono border-2 border-black rounded p-6 space-y-4">
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-white">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="bg-black text-white p-2 rounded mt-2"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="bg-black text-white p-2 rounded mt-2"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-white">Message</label>
                            <textarea
                                id="message"
                                className="bg-black text-white p-2 rounded mt-2"
                                placeholder="Enter your message"
                                rows="8"
                            />
                        </div>
                    </div>

                </div>

                {/* Section for small boxes at bottom right */}
                <div className="absolute bottom-8 right-8 flex space-x-4 z-10">
                    {/* Small Box 1 (GitHub Icon) */}
                    <div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://github.com/AzyTaku"}
                    >
                        <FaGithub className="text-6xl" />

                    </div>

                    {/* Small Box 2 (LinkedIn Icon) */}
                    <div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110"
                        onClick={() => window.location.href = "https://www.linkedin.com/in/azlan-raban-2248991b9/"}>
                        <FaLinkedin className="text-6xl" />
                    </div>

                    {/* Small Box 3 (Information Icon) */}
                    <a href="/" ><div className="h-20 w-20 bg-bgGradient2 text-bgGradient1 flex justify-center hover:cursor-pointer items-center rounded transform transition-transform duration-200 hover:scale-110">
                        <FaInfoCircle className="text-6xl" />
                    </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
