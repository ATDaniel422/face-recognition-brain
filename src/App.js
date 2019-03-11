import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
