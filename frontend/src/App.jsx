import React, { useState, useEffect } from 'react';
import './App.css';
import { About, Exp, Landing, Sidebar, Tech, Contact } from './components';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Set up IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);  // Update active section
          }
        });
      },
      {
        rootMargin: '-50% 0px', // Trigger when the section is in the middle of the viewport
      }
    );

    // Target the sections for observation
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-full h-full overflow-hidden xl:max-w-[1280px]">
      <Sidebar activeSection={activeSection} />
      {/* Pass activeSection to Sidebar */}

      {/* Main Content */}
      <div className="ml-1/5 pl-4 lg:pl-80">
        <div id="home" className="section min-h-screen py-20">
          <h1 className='text-white'></h1>
          <Landing />
        </div>
        <div id="about" className="section py-20">
          <h1 className='text-white'></h1>
          <About />
        </div>
        <div id="exp" className="section py-20">
          <h1 className='text-white'></h1>
          <Exp />
        </div>
        <div id="tech" className="section py-20">
          <h1 className='text-white'></h1>
          <Tech />
        </div>
        {/* <div id="work" className="section py-20">
          <h1 className='text-white'>Work Section</h1>
        </div> */}
        <div id="contact" className="section py-20">
          <h1 className='text-white '></h1>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
