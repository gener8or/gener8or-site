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
        <h2>Overview Analytics</h2>
        {/* <p><a href="mailto:info@overviewanalytics.ca">info@overviewanalytics.ca</a></p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Overview Analytics is a Toronto based data &amp; analytics company.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about') ? <Link to="/about" className="button">Learn More</Link> : <Link to="/about" className="button">About Us</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Overview Analytics <Link to="/">overviewanalytics.ca</Link>.</p>
      <p> Code <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </section>
  </section>
);

export default SideBar;
