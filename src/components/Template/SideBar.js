import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/kepler.gl.png`} alt="" />
      </Link> */}
      <header>
        <h2>Gener8or Studios</h2>
        {/* <p><a href="mailto:info@overviewanalytics.ca">info@overviewanalytics.ca</a></p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Gener8or Studios is a Toronto-based digital media & electronics art studio.
        We leverage the latest creative technologies to make unbelievable sights, sounds & scenes.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">About Us</Link> : <Link to="/services" className="button">Learn More</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Gener8or Studios <Link to="/">gener8or.ca</Link>. <a href="https://github.com/gener8or/gener8or-site">Code</a></p>
    </section>
  </section>
);

export default SideBar;
