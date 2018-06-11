import React, { Component } from 'react';
import './App.css';
import {Header} from "./Header";
import {ProfileCard} from "./ProfileCard";
import {Footer} from "./Footer";


const streamers = ["ninja", "loserfruit"];
const userUrl = "https://wind-bow.glitch.me/twitch-api/users/";
// const statusUrl = "https://wind-bow.glitch.me/twitch-api/streams/"

class App extends Component {
  
  componentDidMount(){

      fetch(userUrl + streamers[0])
      .then(response => response.json())
      .then(data => {
      console.log(data);
      console.log(data.name);
      console.log(data.bio);
      console.log(data.logo);
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        {streamers.map(firstname => (
            <ProfileCard firstname={firstname} />
          ))
        }
        <ProfileCard />
        <Footer />
      </div>
    );
  }
}

export default App;
