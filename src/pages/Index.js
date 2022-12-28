import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Services/Cell';
// import data from '../data/services';

import Cell from '../components/Gallery/Cell';
import data from '../data/gallery';

const Index = () => (
  <Main
    description={"Gener8or Studios' website - a Toronto-based AI art studio."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About</Link></h2>
          {/* <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p> */}
        </div>
      </header>
      {data.map((gallery) => (
        <Cell
          data={gallery}
          key={gallery.title}
        />
      ))}
      <p>
        {/* Gener8or Studios */}
        Learn more <Link to="/about">about</Link>, check out our {' '}
        <Link to="/services">services</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
    </article>
  </Main>
);

export default Index;
