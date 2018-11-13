/* Import statements */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import Work from './work';
import About from './about';
import Contact from './contact';
import EmailSent from './emailsent';


/* App component */
class App extends Component {
  render() {
    return (
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/work" component={Work}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/emailsent" component={EmailSent}/>
          </Switch>
    )
  }

}
  
export default App;
