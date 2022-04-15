import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Overview Analytics' website - a Toronto-based data & analytics advisory services company."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          {/* <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p> */}
        </div>
      </header>
      <p> Welcome to Overview Analytics. We advise on advanced analytics and data strategy
        for a variety of clients in the GTA and Waterloo region.
        Learn more <Link to="/about">about us</Link>, check out our {' '}
        <Link to="/projects">services</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
      <p> Code <a href="https://github.com/overviewanalytics/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
