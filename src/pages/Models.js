import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// import YoutubeEmbed from '../components/Template/YoutubeEmbed';
// import "../components/YoutubeEmbedstyle.css";

// uses babel to load contents of file
const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//   .map((s) => s.replace(/\W/g, ''))
//   .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Models = () => (
  <Main
    title="Book"
    description="Electronic brain models for STEM students, electronics engineers, makers, and tinkerers alike"
  >
    <article className="post markdown" id="book">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/book">Models</Link></h2>
        </div>
      </header>
      <header>
        {/* <div className="title">
          <iframe title="autodesk360model" src="https://gmail1937230.autodesk360.com/g/shares/SH919a0QTf3c32634dcf36db2d1f5056aba0" width="100%" height="800" allowFullScreen="yes" frameBorder="0" scrolling="yes" />
        </div> */}
      </header>
      {/* <header>
        <div className="title">
          <h1>Youtube Embed</h1>
          <YoutubeEmbed embedId="LXb3EKWsInQ" />
        </div>
      </header>   */}
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Models;
