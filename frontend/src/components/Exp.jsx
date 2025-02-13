import React, { useState, useEffect, useRef } from 'react';

const Exp = () => {
    const [scrollLeft, setScrollLeft] = useState(false);
    const [scrollRight, setScrollRight] = useState(false);

    const sectionLeftRef = useRef(null);
    const sectionRightRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5,
        };

        const handleScrollLeft = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setScrollLeft(true);
                } else {
                    setScrollLeft(false);
                }
            });
        };

        const handleScrollRight = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setScrollRight(true);
                } else {
                    setScrollRight(false);
                }
            });
        };

        const observerLeft = new IntersectionObserver(handleScrollLeft, options);
        const observerRight = new IntersectionObserver(handleScrollRight, options);

        if (sectionLeftRef.current) {
            observerLeft.observe(sectionLeftRef.current);
        }

        if (sectionRightRef.current) {
            observerRight.observe(sectionRightRef.current);
        }

        // Cleanup the observers when component unmounts
        return () => {
            if (sectionLeftRef.current) {
                observerLeft.unobserve(sectionLeftRef.current);
            }
            if (sectionRightRef.current) {
                observerRight.unobserve(sectionRightRef.current);
            }
        };
    }, []);

    return (
        <>
            <div className="flex flex-col space-y-4 pt-20">
                {/* First line */}
                <h1 className="text-4xl font-kodemono text-white">EXP</h1>

                {/* Trainee Full Stack Software Engineer */}
                <div
                    ref={sectionLeftRef}
                    className={`w-full max-w-[1000px] mx-auto bg-transparent border border-white p-4 rounded-lg pb-10 transition-all duration-1000 ${scrollLeft ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                    <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">
                        <h1 className="text-2xl font-kodemono text-white">Trainee Full Stack Software Engineer</h1>
                        <h1 className="text-2xl font-kodemono text-black sm:text-right pb-5 font-semibold">Mandadev</h1>
                    </div>
                    <ul className="custom-list list-inside space-y-2 text-white">
                        <li className="bg-bgGradient1 border rounded-lg p-3">
                            Collaborated with a German-based company to enhance their CRM system, focusing on backend API optimizations and frontend refinements to improve user experience.
                        </li>
                        <li className="bg-bgGradient1 border rounded-lg p-3">
                            Applied bug fixes and implemented updates, ensuring smooth system operations and reducing downtime. Monitored server health, resolved critical issues, and optimized database queries, achieving a 20% improvement in endpoint performance.
                        </li>
                        <li className="bg-bgGradient1 border rounded-lg p-3">
                            Efficiently handled support tickets, resolving over 10 issues to enhance system reliability and maintain high-quality service delivery.
                        </li>
                    </ul>
                </div>

                {/* Freelance Full Stack Software Engineer */}
                <div
                    ref={sectionRightRef}
                    className={`w-full max-w-[1000px] mx-auto bg-transparent border border-white p-4 rounded-lg transition-all duration-1000 ${scrollRight ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                >
                    <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left">
                        <h1 className="text-2xl font-kodemono text-white">Freelance Full Stack Software Engineer</h1>
                        <h1 className="text-2xl font-kodemono text-black sm:text-right pb-5 font-semibold">Fiverr</h1>
                    </div>
                    <ul className="custom-list list-inside space-y-2 text-white">
                        <li className="bg-bgGradient1 border rounded-lg p-3">
                            Worked with international clients via Fiverr to deliver tailored software solutions, ensuring seamless integration and optimal functionality.
                        </li>
                        <li className="bg-bgGradient1 border rounded-lg p-3">
                            Collaborated closely with clients to understand their requirements, providing end-to-end development and support for web applications. Delivered projects on time, focusing on clean code, scalability, and user-friendly interfaces.
                        </li>
                        <li className="bg-bgGradient1 border rounded-lg p-3">
                            Communicated effectively across time zones to address client feedback, troubleshoot issues, and implement enhancements, ensuring high client satisfaction and successful project outcomes.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Exp;
