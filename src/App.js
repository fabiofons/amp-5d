import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home'; 
import Artists from './components/Artists';
import Albums from './components/Albums/';
import Songs from './components/Songs/';
import Player from './components/Player';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/artists" component={Artists} />
      <Route path="/albums" component={Albums} />
      <Route path="/songs" component={Songs} />
      <Route path="/music-player" component={Player} />
  </Router>
  );
};

export default App;
