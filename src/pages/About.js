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

const About = () => (
  <Main
    title="about"
    description="Learn about Gener8or Studios"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">about</Link></h2>
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
        At Gener8or Studios, our vision is to be a premier destination for
        generative AI art and experiences in Toronto.
        We believe that AI and other emerging technologies have the power to
        unlock incredible new creative possibilities
        for artists and audiences alike, and we are dedicated to exploring
        and showcasing the incredible potential
        of these technologies.
      </p>
      <p>
        <br />
        Our studio offers a wide range of art & services, including prints,
        signed editions, commissioned works,
        installations, and private functions. We are committed to providing
        our clients and customers with the highest
        quality digital art experiences, and we are constantly pushing the
        boundaries of what is possible.
      </p>
      <p>
        <br />
        We believe that our innovative approach and experienced team make
        us the ideal partner for anyone looking to
        explore the potential of generative AI in their own work or projects.
        We are excited to continue to grow and
        evolve, and to help others discover the endless possibilities of generative AI art.
      </p>
      <br />
      <p>Gener8or Studios was founded by Alec Miller (gener8or) <a className="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/alecjmiller?trk=profile-badge"> Alec Miller </a>
        who holds an <a href="https://ivey.uwo.ca/"> HBA </a> from the Ivey School of Business and a Certificate in Data Science from <a href="https://learn.utoronto.ca/programs-courses/certificates/data-science">University of Toronto SCS. </a>
        Prior to <a href="https://www.gener8or.ca">Gener8or Studios</a>, Alec worked in technology,
        telecom, and startup incubation including roles @ <a href="https://rogers.com">Rogers</a>
        , <a href="https://marsdd.com">MaRS</a>
        , <a href="https://techalliance.ca">TechAlliance</a>
        , and <a href="https://lenovo.com">Lenovo</a>
      </p>
    </article>
  </Main>
);

export default About;
