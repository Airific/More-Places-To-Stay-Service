/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: {},
    };
  }

  componentDidMount() {
    axios.get('/listings/moreplaces/1')
      .then((res) => {
        this.setState({
          houses: res.data[0],
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <h2 tabIndex="-1">More places to stay</h2>
      </div>
    );
  }
}

export default App;
