import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { About, Landing } from '../pages';
import RouterPath from './path';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouterPath.landing} element={<Landing />} />
        <Route path={RouterPath.about} element={<About />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;