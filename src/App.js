import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

// initialise Clarifai

const app = new Clarifai.App({
  apiKey: 'f984cd9b5ec64e5ca53281bf3d3d0237'
})

// set particles for particle background
const particlesOptions =
{
  particles: {
    number:{
      value:150,
      density: {
        enable: true,
        value_area: 1000,
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      submittedUrl: '',
      }
  }

  onInputChange = (event) => {
    this.setState({input:event.target.value});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.input});
    console.log('click');
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
