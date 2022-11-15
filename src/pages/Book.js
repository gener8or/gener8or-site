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

const Book = () => (
  <Main
    title="Book"
    description="Book a generative art workshop or seminar with Gener8or Studios"
  >
    <article className="post markdown" id="book">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/book">Book</Link></h2>
        </div>
      </header>
      <header>
        <div className="title">
          <p>
            Gener8or Studios organizes generative art workshops for individuals and organizations.
            Schedule your prompt-party below:
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <iframe title="square-booking-flow" src="https://squareup.com/appointments/book/ymyql723sz3a09/LQ4A45BF7KEBQ/start" width="100%" height="1000" frameBorder="0" scrolling="yes" />
        </div>
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

export default Book;
