import React, { Component } from 'react';
import './App.css';
import {Header} from "./Header";
import {ProfileCard} from "./ProfileCard";
import {Footer} from "./Footer";


const streamers = ["ninja", "dakotaz", "DrDisRespectLIVE", "TSM_Myth", "Loserfruit", "NICKMERCS", "Pineaqples", "CDNThe3rd", "KingRichard"];

const makeUrl = name => 'https://wind-bow.glitch.me/twitch-api/users/${name}';

const returnPromises = streamers.map(name => fetch(makeUrl(name)));

const test = Promise.all(returnPromises);
// const statusUrl = "https://wind-bow.glitch.me/twitch-api/streams/"

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      userData: []
    }
  }
  
  
  componentDidMount(){

      test.then(values => this.setState({userData: values}))
  }
  
  render() {
    const userData = this.state.userData;
    return (
      <div className="App">
        <Header />
        {userData.map(firstname => (
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
