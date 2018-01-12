import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage.jsx';
import Page2 from './Page2.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/page2" component={Page2} />
        </Switch>
      </HashRouter>
    );
  }
}

// TODO: Add PropTypes

export default App;
