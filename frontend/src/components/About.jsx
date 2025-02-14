import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const [scrollBox1, setScrollBox1] = useState(false);
    const [scrollBox2, setScrollBox2] = useState(false);
    const [scrollBox3, setScrollBox3] = useState(false);

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    const box3Ref = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const handleScrollBox1 = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setScrollBox1(true);
                } else {
                    setScrollBox1(false);
                }
            });
        };

        const handleScrollBox2 = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setScrollBox2(true);
                } else {
                    setScrollBox2(false);
                }
            });
        };

        const handleScrollBox3 = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setScrollBox3(true);
                } else {
                    setScrollBox3(false);
                }
            });
        };

        const observerBox1 = new IntersectionObserver(handleScrollBox1, options);
        const observerBox2 = new IntersectionObserver(handleScrollBox2, options);
        const observerBox3 = new IntersectionObserver(handleScrollBox3, options);

        if (box1Ref.current) {
            observerBox1.observe(box1Ref.current);
        }
        if (box2Ref.current) {
            observerBox2.observe(box2Ref.current);
        }
        if (box3Ref.current) {
            observerBox3.observe(box3Ref.current);
        }

        return () => {
            if (box1Ref.current) {
                observerBox1.unobserve(box1Ref.current);
            }
            if (box2Ref.current) {
                observerBox2.unobserve(box2Ref.current);
            }
            if (box3Ref.current) {
                observerBox3.unobserve(box3Ref.current);
            }
        };
    }, []);


    return (
        <>
            <div className="flex flex-col space-y-4">
                {/* First line */}
                <h1 className="text-4xl font-kodemono text-white">Who am I?</h1>

                {/* Description line */}
                <h1 className="text-1xl font-kodemono text-white text-center">
                    Hi! I’m Azlan Raban, a software engineer with a strong focus on the MERN stack (MongoDB, Express.js, React, and Node.js).
                    I’m driven by a passion for building dynamic, scalable, and user-centric web applications that solve real-world problems.
                    From designing intuitive front-end interfaces to optimizing back-end performance,
                    I thrive on turning complex ideas into seamless digital experiences.
                </h1>

                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-8 p-10">
                    <div
                        ref={box1Ref}
                        className={`w-full sm:flex-1 bg-transparent border-2 border-black rounded h-80 hover:bg-bgGradient2 hover:cursor-pointer shadow-lg shadow-bgGradient1 flex flex-col items-center justify-center transition-all duration-1000 ${scrollBox1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: scrollBox1 ? '0ms' : '0ms' }}
                    >
                        <FaCode className="text-6xl text-txcolor1 mb-10" />
                        <h2 className="text-xl font-kodemono font-bold text-white">Full Stack Developer</h2>
                    </div>
                    <div
                        ref={box2Ref}
                        className={`w-full sm:flex-1 bg-transparent border-2 border-black rounded h-80 hover:bg-bgGradient2 hover:cursor-pointer shadow-lg shadow-bgGradient1 flex flex-col items-center justify-center transition-all duration-1000 ${scrollBox2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: scrollBox2 ? '200ms' : '0ms' }}
                    >
                        <FaLaptopCode className="text-6xl text-txcolor1 mb-10" />
                        <h2 className="text-xl font-kodemono font-bold text-white">Software Engineer</h2>
                    </div>
                    <div
                        ref={box3Ref}
                        className={`w-full sm:flex-1 bg-transparent border-2 border-black rounded h-80 hover:bg-bgGradient2 hover:cursor-pointer shadow-lg shadow-bgGradient1 flex flex-col items-center justify-center transition-all duration-1000 ${scrollBox3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: scrollBox3 ? '400ms' : '0ms' }}
                    ><FaLightbulb className="text-6xl text-txcolor1 mb-10" />
                        <h2 className="text-xl font-kodemono font-bold text-white">Technical Consultant</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
