import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './scenes/Home';
import Jokes from './scenes/jokes/Jokes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Each route is defined with Route */}
          <Route exact path='/' component={Home} />
          <Route path='/jokes' component={Jokes} />
        </div>
      </Router>
    );
  }
}

export default App;
