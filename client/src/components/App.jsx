/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import MoreHouses from './MoreHouses';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: undefined,
    };
  }

  componentDidMount() {
    axios.get('/listings/moreplaces/1')
      .then((res) => {
        console.log('res: ', res.data[0]);
        this.setState({
          houses: res.data[0],
        });
      })
      .catch(console.log);
  }

  render() {
    const { houses } = this.state;
    return (
      <div>
        <h2 tabIndex="-1">More places to stay</h2>
        {houses ? <MoreHouses places={houses} /> : null}
      </div>
    );
  }
}

export default App;
