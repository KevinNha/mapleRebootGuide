import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            <span class='nav-reboot'>Reboot</span><span class="nav-guide">Guide</span>
            <img src="/mapleleaf.png" class='nav-home-icon' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='gears' className='nav-links' onClick={closeMobileMenu}>
                Gears
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/level-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Level-Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/links-legions'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Link & Legion
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/quests'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Quests
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
          </ul>
          {button}
        </div>
      </nav>
    </>
  );
}

export default Navbar;