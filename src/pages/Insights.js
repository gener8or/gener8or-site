import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Insights/Cell';
import data from '../data/insights';

const Insights = () => (
  <Main
    title="Insights"
    description="Learn about Overview Analytics's services."
  >
    <article className="post" id="insights">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/insights">Insights</Link></h2>
          {/* <p>Services offered by Overview Analytics</p> */}
        </div>
      </header>
      {data.map((insight) => (
        <Cell
          data={insight}
          key={insight.title}
        />
      ))}
    </article>
    <article className="post" id="ops">
      <header>
        <div className="title">
          <h3 data-testid="heading"><Link to="/insights">Insights</Link></h3>
          <iframe title="revamp" src="https://onedrive.live.com/embed?cid=EDB1502ED81FD43F&amp;resid=EDB1502ED81FD43F%21239155&amp;authkey=AELwgeRGO6STZBs&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="754" height="448px" frameBorder="0" />
        </div>
      </header>
      <header>
        <div className="title">
          <iframe title="gcp-blueprints" src="https://onedrive.live.com/embed?cid=EDB1502ED81FD43F&resid=EDB1502ED81FD43F%21234604&authkey=AB7RKh9xChIBsiI&em=2" width="754" height="448" frameBorder="0" scrolling="no" />
        </div>
      </header>
    </article>
    <article className="post" id="ops">
      <header>
        <div className="title">
          <h3 data-testid="heading"><Link to="/insights">Insights</Link></h3>
          <iframe title="revamp" src="https://onedrive.live.com/embed?cid=EDB1502ED81FD43F&amp;resid=EDB1502ED81FD43F%21239155&amp;authkey=AELwgeRGO6STZBs&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="754" height="448px" frameBorder="0" />
        </div>
      </header>
      <header>
        <div className="title">
          <iframe title="gcp-blueprints" src="https://onedrive.live.com/embed?cid=EDB1502ED81FD43F&resid=EDB1502ED81FD43F%21239122&authkey=APWtqHvhw1zc7_4&em=2" width="754" height="448" frameBorder="0" scrolling="no" />
        </div>
      </header>
    </article>
  </Main>
);

export default Insights;
