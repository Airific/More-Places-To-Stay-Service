/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MoreHouses from './MoreHouses';
import Arrow from './Arrows';

const Container = styled.div`
position: relative;
height: 320px;
max-width: 1120px;
margin: auto;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
font-size: 14px;
// border: 1px solid blue;
`;
const Header = styled.div`
position: relative;
display: flex;
align-items: center;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
// border: 1px solid pink;
font-size: .5 em !important;
font-weight 600;
line-height: 26px;
`;
export const Title = styled.h2`
  font-weight: 450;
  font-size: 1.6em;
  margin-left: 8px;
`;
const PageTracker = styled.div`
display: flex;
position: absolute;
justify-content: flex-end; !important;
right: 100px !important;
font-weight: 400 !important;
font-size: 14px !important;
line-height: 18px !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
`;

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allHouses: undefined,
      isSaved: false,
      refs: {
        0: React.createRef(), 1: React.createRef(), 2: React.createRef(), 3: React.createRef(), 4: React.createRef(), 5: React.createRef(), 6: React.createRef(), 7: React.createRef(), 8: React.createRef(), 9: React.createRef(), 10: React.createRef(), 11: React.createRef(),
      },
      page: 1,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.saveClick = this.saveClick.bind(this);
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

  saveClick() {
    const { isSaved } = this.state;
    if (isSaved) {
      this.setState((state) => ({
        isSaved: !state.isSaved,
      }));
    }
  }

  // transition to next four
  nextSlide() {
    let newPage;
    console.log('refs: ', this.state.refs);
    if (this.state.page === 3) {
      newPage = 1;
      this.state.refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (this.state.page === 2) {
      newPage = 3;
      this.state.refs[11].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      newPage = 2;
      this.state.refs[7].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.setState({
      page: newPage,
    });
  }

  // transition to prev four
  prevSlide() {
    let newPage;
    if (this.state.page === 1) {
      newPage = 3;
      this.state.refs[11].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (this.state.page === 2) {
      newPage = 1;
      this.state.refs[0].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      newPage = 2;
      this.state.refs[4].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.setState({
      page: newPage,
    });
  }

  render() {
    const {
      allHouses, isSaved, refs, page,
    } = this.state;
    return (
      <Container className="ContainerApp">
        <Header className="Header">
          <Title className="Title" tabIndex="-1">More places to stay</Title>
          <PageTracker>{page} / 3</PageTracker>
          <Arrow direction="left" handleClick={this.prevSlide} />
          <Arrow direction="right" handleClick={this.nextSlide} />
        </Header>
        {allHouses ? <MoreHouses places={allHouses} saveClick={this.saveClick} refs={refs} isSaved={isSaved} /> : null}
      </Container>
    );
  }
}

export default App;
