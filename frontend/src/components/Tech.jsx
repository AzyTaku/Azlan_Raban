import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaGithub, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiNetlify, SiPython, SiJavascript, SiCplusplus, SiMysql, SiApache, SiPostman, SiFigma, SiNotion } from 'react-icons/si';

const Tech = () => {
    const [scrollIcons, setScrollIcons] = useState(new Array(20).fill(false)); // 20 icons in total

    const sectionRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,  // Adjust threshold for triggering the intersection observer
        };

        const handleScroll = (entries) => {
            entries.forEach((entry) => {
                const index = parseInt(entry.target.dataset.index);  // Get index from the data-index attribute
                if (entry.isIntersecting) {
                    setScrollIcons((prev) =>
                        prev.map((state, idx) => (idx === index ? true : state)) // Update the state for the intersected icon
                    );
                }
            });
        };

        const observer = new IntersectionObserver(handleScroll, options);

        const iconSections = sectionRef.current?.querySelectorAll('.tech-icon');
        iconSections?.forEach((section) => observer.observe(section));

        return () => {
            iconSections?.forEach((section) => observer.unobserve(section)); // Clean up observer when unmounting
        };
    }, []);

    // Combine all the icons into a single list for simplicity
    const icons = [
        { icon: <SiJavascript />, label: 'JavaScript' },
        { icon: <SiPython />, label: 'Python' },
        { icon: <SiCplusplus />, label: 'C++' },
        { icon: <FaJava />, label: 'Java' },

        { icon: <FaReact />, label: 'React' },
        { icon: <FaNodeJs />, label: 'Node.js' },
        { icon: <SiExpress />, label: 'Express' },
        { icon: <SiMongodb />, label: 'MongoDB' },
        { icon: <SiMysql />, label: 'MySQL' },

        { icon: <FaGitAlt />, label: 'Git' },
        { icon: <FaGithub />, label: 'GitHub' },
        { icon: <FaDocker />, label: 'Docker' },
        { icon: <SiPostman />, label: 'Postman' },
        { icon: <SiNetlify />, label: 'Netlify' },

        { icon: <SiFigma />, label: 'Figma' },
        { icon: <SiNotion />, label: 'Notion' },
    ];

    return (
        <div className="flex flex-col space-y-4 pt-20">
            <h1 className="text-4xl font-kodemono text-white pb-20">TECH</h1>

            {/* All Icons */}
            <div ref={sectionRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-center mt-8 pl-10 sm:pl-0">
                {icons.map((tech, index) => (
                    <div
                        key={index}
                        className={`tech-icon text-5xl sm:text-6xl lg:text-7xl text-black animate-float relative group transition-all duration-1000 ${scrollIcons[index] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                        data-index={index} // Each icon gets a unique index
                    >
                        {tech.icon}
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full text-sm text-white bg-black rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            {tech.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tech;
