import React, { Component } from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";


const streamers = ["ninja", "dakotaz", "DrDisRespectLIVE", "TSM_Myth", "Loserfruit", "NICKMERCS", "Pineaqples", "CDNThe3rd", "KingRichard"];

const userURL = "https://wind-bow.glitch.me/twitch-api/users/";
// const statusUrl = "https://wind-bow.glitch.me/twitch-api/streams/"


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: []
    }
  }
  
  componentDidMount(){
    for (let i = 0; i < streamers.length; i++){
      fetch(userURL + streamers[i])
      .then(response => response.json())
      .then(data => {
        let userData = [...this.state.userData, data];
        this.setState({userData});
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          {
            this.state.userData.map(function(user, i){
              console.log(user);
              return <li key={i}>{user.name}</li>
            })
          }
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
