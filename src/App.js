import React from 'react';
import './App.css';
import Header from './components/page/base/header';

/**
 * Page components imports
 */

 import Home from './components/page/home/home';
 import About from './components/page/about/about-page';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from './firebase/firebase.util';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header currentUser={ this.state.currentUser } />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
