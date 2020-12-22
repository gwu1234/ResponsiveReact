import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Users from './components/Users';
import Company from './components/Company';

const Switcher = () => {
  const routes = [
    {
      path: "/error",
      component: PageNotFound,
    },
    {
      path: "/products",
      component: Products,
    },
    {
      path: "/users",
      component: Users,
    },
    {
      path: "/company",
      component: Company,
    },
    {
      path: "/",
      component: Home,
    },
  ]

  return (
    <React.Fragment>
      <Switch>
        {routes.map((route, i) =>
          <Route exact key={i} path={route.path} component={route.component} />
        )}
      </Switch>
    </React.Fragment>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <Switcher />
    </BrowserRouter>
  )
}

export default App

/* app component */