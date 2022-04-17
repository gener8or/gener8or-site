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
          <h2 data-testid="heading"><Link to="/insights">Insights</Link></h2>
        </div>
      </header>
      <div className="title">
        <iframe width="830" height="450" src="https://www.youtube.com/embed/ai7y73FlBGA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <br />
      <br />
      <div className="title">
        <iframe width="830" height="450" src="https://www.youtube.com/embed/995feyNG0Is" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
    </article>
  </Main>
);

export default Insights;
