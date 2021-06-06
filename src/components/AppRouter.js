import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Result from './Result';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>&nbsp;
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/:type" component={Result} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
