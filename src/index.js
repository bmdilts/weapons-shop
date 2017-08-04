import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

//import React Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import components
import About from './components/About';
import Armor from './components/Armor';
import BaseLayout from './components/BaseLayout';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Shields from './components/Shields';
import Weapons from './components/Weapons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
