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
    description="Livestreaming Video Analytics"
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
      <br />
      <p>
        <iframe title="vdo.ninja" allow="autoplay;camera;microphone;fullscreen;picture-in-picture;display-capture;" src="https://vdo.ninja/?view=pbbRZy2&s&q&cleanoutput&transparent" width="100%" height="450" />
      </p>
    </article>
  </Main>
);

export default Live;
