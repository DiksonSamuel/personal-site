import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { About, Landing } from '../pages';
import RouterPath from './path';

const MainRouter = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path={RouterPath.landing} element={<Landing />} />
        <Route exact path={RouterPath.about} element={<About />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;