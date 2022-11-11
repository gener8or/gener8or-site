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

const Live = () => (
  <Main
    title="Live"
    description="Livestreaming Generative Art"
  >
    <article className="post markdown" id="live">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/live">live</Link></h2>
        </div>
      </header>
      {/* <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      /> */}
      <p>
        <div className="title">
          <h2 data-testid="heading"><Link to="/live">Livestream</Link></h2>
          <iframe width="100%" height="640" src="https://www.youtube.com/embed/6eeQrCDpBFs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </p>
      <br />
      <br />
    </article>
  </Main>
);

export default Live;
