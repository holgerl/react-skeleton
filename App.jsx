import React from 'react';
import Left from './components/Left.jsx';
import Right from './components/Right.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: 0};
  }

  handleChange() {
    this.setState({value: this.state.value + 1});
  }

  // TODO: Something else than div for container
  render() {
    return (
    	<div id="appContainer">
	      	<Left 
          		onChange={this.handleChange}
          	/>
	      	<Right value={this.state.value}/>
	    </div>
    );
  }
}

// TODO: Add PropTypes

export default App;
