import React from 'react';
import '../styles/App.css';

//import React Router
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//import components
import About from './About';
import Armor from './Armor';
import BaseLayout from './BaseLayout';
import ContactUs from './ContactUs';
import Home from './Home';
import Shields from './Shields';
import Weapons from './Weapons';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Shop" component={Weapons} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/" component={Home} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}
