import React, { Component } from 'react';
import './App.css';
import {Header} from "./Header";
import {ProfileCard} from "./ProfileCard";
import {Footer} from "./Footer";


const streamers = ["ninja", "loserfruit"];
const userUrl = "https://wind-bow.glitch.me/twitch-api/users/";
// const statusUrl = "https://wind-bow.glitch.me/twitch-api/streams/"

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileCard />
        <Footer />
      </div>
    );
  }
}

export default App;
