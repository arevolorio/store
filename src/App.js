import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import './App.css';

import Header from './components/page/base/header';

/**
 * Page components imports
 */

 import Home from './components/page/home/home';
 import Shop from './components/page/shop/shop';
 import About from './components/page/about/about-page';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      sections: [
        {
          title: 'womens',
          imageUrl: 'https://images.assetsdelivery.com/compings_v2/javiindy/javiindy1702/javiindy170200072.jpg',
          description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
          size: 'large',
          id: 4,
          link: '/shop/men'
        },
        {
          title: 'mens',
          imageUrl: 'https://sallauretta.com/wp-content/uploads/male-model-street-stye-1.jpg',
          description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
          size: 'large',
          id: 5,
          link: '/shop/woman'
        }
      ],
      productCategories: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          link: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          link: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        }
      ]
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async user => {
      
      const userRef = await createUserProfileDocument(user);
      if (userRef) {
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else{
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home sections={this.state.sections}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
