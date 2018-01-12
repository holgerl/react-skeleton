import React from 'react';
import HelloWorld from './components/HelloWorld.jsx';

class App extends React.Component {

  render() {
    return (
    	<div>
	      	<HelloWorld />
	      	<HelloWorld />
	    </div>
    );
  }
}

export default App;
