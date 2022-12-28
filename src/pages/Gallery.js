import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Gallery/Cell';
import data from '../data/gallery';

const Gallery = () => (
  <Main
    title="Service Offering"
    description="Learn about Gener8or Studios's services."
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/gallery">Gallery</Link></h2>
          {/* <p>Services offered by Gener8or Studios</p> */}
        </div>
      </header>
      {/* <header>
        <div className="title">
          <iframe title="square-booking-flow" src="https://square.link/u/22v2LfFV" width="100%" height="1100" frameBorder="0" scrolling="yes" />
        </div>
      </header> */}
      {data.map((gallery) => (
        <Cell
          data={gallery}
          key={gallery.title}
        />
      ))}

    </article>
  </Main>
);

export default Gallery;
