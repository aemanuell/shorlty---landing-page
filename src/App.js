import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { Home } from './pages/Home';

export function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </>
  );
}
