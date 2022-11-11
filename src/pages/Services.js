import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Services/Cell';
import data from '../data/services';

const Services = () => (
  <Main
    title="Service Offering"
    description="Learn about Gener8or Studios's services."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/services">Services</Link></h2>
          {/* <p>Services offered by Gener8or Studios</p> */}
        </div>
      </header>
      {/* <header>
        <div className="title">
          <iframe title="square-booking-flow" src="https://square.link/u/22v2LfFV" width="100%" height="1100" frameBorder="0" scrolling="yes" />
        </div>
      </header> */}
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Services;mo
