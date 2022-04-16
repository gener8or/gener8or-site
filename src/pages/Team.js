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
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="alecjmiller" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/alecjmiller?trk=profile-badge">Alec Miller</a></div>
      <br />
      <p><a href="https://ivey.uwo.ca/">Ivey HBA</a> and <a href="https://learn.utoronto.ca/programs-courses/certificates/data-science">University of Toronto SCS </a> grad
        with specializations in Entrepreneurship &amp; Data Science.
        I&apos;m the owner/operator of <a href="https://www.overviewanalytics.ca">Overview Analytics</a>, prior to which I worked in technology,
        telecom, and startup incubation including roles @ <a href="https://rogers.com">Rogers</a>
        , <a href="https://marsdd.com">MaRS</a>
        , <a href="https://techalliance.ca">TechAlliance</a>
        , and <a href="https://lenovo.com">Lenovo</a>.
      </p>
    </article>
  </Main>
);

export default Team;
