import React, { useEffect } from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

function Nav( { isFixed, setIsFixed } ) {
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsFixed]);


  return (
    <nav className={isFixed ? "navbar fixed" : "navbar"}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
        <li>
          <Link to="/rsvp">RSVP</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
