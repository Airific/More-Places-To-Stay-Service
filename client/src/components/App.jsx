/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MoreHouses from './MoreHouses';
import Arrow from './Arrows';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      allHouses: undefined,
      currentSet: [],
      translate: 0,
      transition: 0.45,
    };
    this.getWidth = this.getWidth.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  componentDidMount() {
    axios.get('/listings/moreplaces/1')
      .then((res) => {
        console.log('res.data[0].houses: ', res.data[0].houses);
        this.setState({
          allHouses: res.data[0].houses,
          currentSet: res.data[0].houses.slice(0, 4),
        });
      })
      .catch(console.log);
  }

  getWidth() { return this.window.innerWidth; }

  nextSlide() {
    // if (activeIndex === this.state.houses.houses.length - 1) {
    //   this.setState({
    //     translate: 0,
    //     activeIndex: 0,
    //   });
    // }
    // this.setState({
    //   activeIndex: this.state.activeIndex + 1,
    //   translate: (this.state.activeIndex + 1) * this.getWidth(),
    // });
    const nextProperties = this.state.currentSet[3].index;
    this.setState({
      currentSet: this.state.allHouses.slice(nextProperties + 1, nextProperties + 5),
    });
  }

  // prevSlide() {
  //   if (this.state.activeIndex === 0) {
  //     this.setState({
  //       translate: (this.state.houses.houses.length - 1) * this.getWidth(),
  //       activeIndex: this.state.houses.houses.length - 1,
  //     });
  //   }
  //   this.setState({
  //     activeIndex: this.state.activeIndex - 1,
  //     translate: (this.state.activeIndex - 1) * getWidth(),
  //   });
  // }

  render() {
    const Container = styled.div`
      position: relative;
      height: 100vh;
      width: 100vw;
      margin: 0 auto;
      overflow: hidden;
      font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
      font-size: 14px;
      font-weight: 600px;
      border: 0 6px;
    `;
    const {
      translate, transition, allHouses, currentSet,
    } = this.state;
    return (
      <Container className="ContainerApp">
        <h2 tabIndex="-1">More places to stay</h2>
        {allHouses ? <MoreHouses places={currentSet} allHouses={allHouses} translate={translate} transition={transition} width={this.getWidth} /> : null}
        <Arrow direction="left" handleClick={this.prevSlide} />
        <Arrow direction="right" handleClick={this.nextSlide} />
      </Container>
    );
  }
}

export default App;
