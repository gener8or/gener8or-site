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

const Insights = () => (
  <Main
    title="insight"
    description="Learn about Overview Analytics' Team"
  >
    <article className="post markdown" id="insights">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/insights">team</Link></h2>
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
    </article>
  </Main>
);

export default Insights;
