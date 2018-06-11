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
        this.state.userData.push(data);
      })
      
    }
    console.log(this.state.userData)
    console.log(this.state.userData.name)
    
      
  }
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <ul>
          {
            this.state.userData.map(function(users, i){
              console.log("test");
              return <li>{users.name}</li>
            })
          }
        </ul>
        <Footer />
      </div>
    );
  }
}

export default App;
