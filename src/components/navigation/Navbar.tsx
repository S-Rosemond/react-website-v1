import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import ListLinks from './elements/ListLinks';
import './Navbar.css';

import navlinks from './navlinks';

const Navbar = () => {
  const [onClick, setOnClick] = useState(false);
  const [button, setButton] = useState(() => true);

  const handleOnClick = () => setOnClick((prev) => !prev);
  const closeMobileMenu = () => setOnClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
    else setButton(true);
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <Fragment>
      <header>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              TRVL <i className='fab fa-typo3'></i>
            </Link>

            <div className='menu-icon' onClick={handleOnClick}>
              <i className={onClick ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={onClick ? 'nav-menu active' : 'nav-menu'}>
              <ListLinks array={navlinks} handleClick={closeMobileMenu} />
            </ul>
            {button && (
              <Button handleClick={() => null} buttonStyle='btn-outline'>
                Sign Up
              </Button>
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
