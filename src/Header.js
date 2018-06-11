import React from "react";

export class Header extends React.Component {
    render(){
        return (
            <div className="headerContainer">
                <h1>TinyTwitch <i className="fab fa-twitch"></i></h1>
                <div className="headerButtonContainer">
                    <button className="headerButton refreshButton"><i className="fas fa-redo-alt"></i> Refresh</button>
                    <button className="headerButton statusSwitchButton"><i className="fas fa-circle"></i> All</button>
                </div>
            </div>
        )
    }
}