import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Insights/Cell';
import data from '../data/insights';

const Insights = () => (
  <Main
    title="Insights"
    description="Learn about Gener8or Studios' services including prints, commissions, and exhibits."
  >
    <article className="post" id="insights">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/insights">Insights</Link></h2>
          {/* <p>Services offered by Gener8or Studios</p> */}
        </div>
      </header>
      {data.map((insight) => (
        <Cell
          data={insight}
          key={insight.title}
        />
      ))}
    </article>
  </Main>
);

export default Insights;
