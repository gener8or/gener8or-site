import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact Us"
    description="Contact Overview Analyticss via info @ overviewanalytics.ca"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div>
        <iframe title="intake-form" src="https://docs.google.com/forms/d/e/1FAIpQLSc17cowpQHS47yeDehGUs_ekhojaCW2AFmYFZwzwiHH-ULtAw/viewform?embedded=true" width="100%" height="450" frameBorder="0" marginHeight="0" marginWidth="0" />
      </div>
      <div className="email-at">
        <p>Contact Us: </p>
        <EmailLink />
      </div>
      {/* <ContactIcons /> */}
    </article>
  </Main>
);

export default Contact;
