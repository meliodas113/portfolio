import React from 'react';
import './Navbar.css';
import { useHistory, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const history = useHistory();
  const location = useLocation();
  const handleRoute = (page) => {
    if (location.pathname === page) {
      return;
    }
    history.push('/' + page);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='Navbar'
    >
      <div className='NameCircle' onClick={() => handleRoute('')}>
        <span className='Name'></span>
      </div>
      <div className='Navlinks'>
        <span className='link' onClick={() => handleRoute('')}>
          Home
        </span>
        <span className='link' onClick={() => handleRoute('about')}>
          About
        </span>
        <span className='link' onClick={() => handleRoute('experience')}>
          Experience
        </span>
        <span className="link" onClick={() => handleRoute("work")}>
          Work
        </span>
        <span className='link' onClick={() => handleRoute('contact')}>
          Contact
        </span>
      </div>
    </motion.div>
  );
}
