import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './../components/navigation/Navbar';
import Home from '../view/HomePage/Home';
import Products from './../view/Products/Products';
import Services from './../view/Services/Services';
import SignUp from './../view/SignUp/SignUp';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
