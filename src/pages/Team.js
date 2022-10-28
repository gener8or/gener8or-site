import React from 'react';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import raw from 'raw.macro';

import Main from '../layouts/Main';
// uses babel to load contents of file
// const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Team = () => (
  <Main
    title="team"
    description="Learn about Overview Analytics' Team"
  >
    <article className="post markdown" id="team">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/team">team</Link></h2>
        </div>
      </header>
      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
      <p>Gener8or Studios was founded by Alec Millr (gener8or) <a className="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/alecjmiller?trk=profile-badge"> Alec Miller </a>
        who holds an <a href="https://ivey.uwo.ca/"> Honours Business Administration degree</a> from the Ivey School of Business and a Certificate in Data Science from <a href="https://learn.utoronto.ca/programs-courses/certificates/data-science">University of Toronto SCS. </a>
        Prior to <a href="https://www.overviewanalytics.ca">Overview Analytics</a>, Alec worked in technology,
        telecom, and startup incubation including roles @ <a href="https://rogers.com">Rogers</a>
        , <a href="https://marsdd.com">MaRS</a>
        , <a href="https://techalliance.ca">TechAlliance</a>
        , and <a href="https://lenovo.com">Lenovo</a>.
      </p>
    </article>
  </Main>
);

export default Team;
