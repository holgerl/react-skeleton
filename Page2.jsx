import React from 'react';

class Page2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pane">
        <h1>This is page 2</h1>
        <p>Go back to <a href="#/">main page</a></p>
      </div>
    );
  }
}

export default Page2;
