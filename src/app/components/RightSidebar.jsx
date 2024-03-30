

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const RightSidebar = (menuItem) => {
  const [activeSection, setActiveSection] = useState(menuItem.activeSection);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset  < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeStyle = {
    fontWeight: 'bold',
    color: '#009127',
  };
console.log(menuItem.class)
  return (
    <div className="">
      <ul>
        {/* {menuItem.map((item) => */}
            <li className={activeSection === menuItem.class ? 'active' : ''}> <a href={`#${menuItem.class}`} className='text-xl' style={activeSection === 
        menuItem.class ? activeStyle : {}}>{menuItem.title}</a></li>
        {/* )} */}
        {/* <li className={activeSection === 'section2' ? 'active' : ''}><a href="#section2">Section 2</a></li>
        <li className={activeSection === 'section3' ? 'active' : ''}><a href="#section3">Section 3</a></li> */}
        {/* Add more menu items as needed */}
      </ul>
    </div>
  );
};

export default RightSidebar;
