import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { About, Landing, Resume } from '../pages';
import RouterPath from './path';

const MainRouter = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path={RouterPath.landing} element={<Landing />} />
        <Route exact path={RouterPath.about} element={<About />} />
        <Route exact path={RouterPath.resume} element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default MainRouter;