import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Gener8or Studios' website - a Toronto-based AI art studio."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Us</Link></h2>
          {/* <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p> */}
        </div>
      </header>
      <p>
        {/* Gener8or Studios is a data & analytics service provider. We advise small & mid-market
        businesses on data strategy and do custom-builds of data pipelines for a variety of
        technology-based businesses.
        Our areas of expertise include commercialization/IP, data governance,
        business intelligence, location analytics, data models, pipelines,
        and dashboards. We help clients unlock the value of their data by
        pairing deep business strategy with bleeding-edge AI models such as
        Open AI GPT-3, Github Co-Pilot, and H2O AutoML.
        We build custom data processing pipelines for our clients
        with a focus on semi/unstructured data such as image, audio,
        video, and text. */}
        Learn more <Link to="/about">about us</Link>, check out our {' '}
        <Link to="/services">services</Link>, {' '}
        or <Link to="/contact">contact</Link> us.
      </p>
      <p> Code <a href="https://github.com/overviewanalytics/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
