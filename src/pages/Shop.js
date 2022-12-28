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

const Shop = () => (
  <Main
    title="Shop"
    description="Learn About Gener8or Studios"
  >
    <article className="post markdown" id="shop">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/shop">Shop</Link></h2>
        </div>
      </header>
      {/* <header>
        <div className="title">
          <iframe title="youtubeembed" src="https://www.youtube.com/embed/ZNVcUnHG1ns" width="100%" height="450" allowFullScreen frameBorder="0" scrolling="yes" />
        </div>
      </header> */}
      <header>
        <div className="title">
          <iframe title="square-booking-flow" src="https://www.gener8or.studio/s/shop?page=1&limit=60&sort_by=popularity_score&sort_order=desc" width="100%" height="1300" frameBorder="0" scrolling="yes" />
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

export default Shop;
