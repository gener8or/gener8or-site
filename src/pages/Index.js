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
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to Overview Analytics. We advise on advanced analytics and data strategy
        for a variety of clients in the GTA and Waterloo region. Please feel free to
        read more <Link to="/about">about us</Link>, and check out our {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Code <a href="https://github.com/overviewanalytics/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
