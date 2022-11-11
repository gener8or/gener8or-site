import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Shop = lazy(() => import('./pages/Shop'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Book = lazy(() => import('./pages/Book'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Team = lazy(() => import('./pages/Team'));
const Live = lazy(() => import('./pages/Live'));
const Models = lazy(() => import('./pages/Models'));

// const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/shop" component={Shop} />
        <Route path="/book" component={Book} />
        <Route path="/models" component={Models} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/live" component={Live} />
        <Route path="/models" component={Models} />
        {/* <Route path="/stats" component={Stats} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/team" component={Team} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route component={NotFound} status={404} />

      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
