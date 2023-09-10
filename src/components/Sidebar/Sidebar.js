import React, { useState, useEffect } from 'react';
import { ImHome } from 'react-icons/im';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { FaTrophy,FaCode } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { useHistory, useLocation } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [openNav]);

  const history = useHistory();
  const location = useLocation();
  const handleRoute = (page) => {
    setOpenNav(false);
    if (location.pathname === page) {
      return;
    }
    history.push('/' + page);
  };

  const openNavHandler = () => {
    setOpenNav(true);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <div>
      <div className='hamBurger' onClick={openNavHandler}>
        <span style={{ marginBottom: '1px' }}></span>
        <span></span>
        <span style={{ marginTop: '1px' }}></span>
      </div>
      <div
        className={openNav ? 'blurDivOpen' : 'blurDiv'}
        onClick={closeNav}
      ></div>
      <div className={openNav ? 'sideMenueOpen' : 'sideMenue'}>
        <div className='logoDiv'>
          <div className='logo'></div>
        </div>
        <div className='linkSec' style={{ height: '85%' }}>
          <span className='sideLink' onClick={() => handleRoute('home')}>
            <ImHome />
          </span>
          <span className='sideLink' onClick={() => handleRoute('about')}>
            <BsFillInfoSquareFill />
          </span>{' '}
          <span className='sideLink' onClick={() => handleRoute('experience')}>
            <FaTrophy />
          </span>{' '}
          <span className="sideLink" onClick={() => handleRoute("work")}>
            <FaCode />
          </span>
          <span className='sideLink' onClick={() => handleRoute('contact')}>
            <RiContactsBookFill />
          </span>
        </div>
      </div>
    </div>
  );
}
