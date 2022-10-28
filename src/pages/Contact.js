import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
// import Cell from '../components/Projects/Cell';

// import data from '../data/qr';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact Us"
    description="Contact Gener8or Studioss via info @ overviewanalytics.ca"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/Contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Contact Us: </p>
        <EmailLink />
      </div>
      <header>
        <div className="title">
          <iframe title="square-booking-flow" src="https://square.site/appointments/buyer/widget/9x0957pgxktr2f/LNBV7SAYVA2FZ" width="100%" height="1300" frameBorder="0" scrolling="yes" />
        </div>
      </header>
      {/* <ContactIcons /> */}
    </article>

  </Main>
);

export default Contact;
