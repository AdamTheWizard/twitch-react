import React from "react";

export class Footer extends React.Component {
    render(){
        return (
            <div className="footerContainer">
                <div className="footerIconsContainer">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/adamthewizard"><span className="footerIcon"><i className="fab fa-twitter-square"></i></span></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.codepen.io/adamthewizard"><span className="footerIcon"><i className="fab fa-codepen"></i></span></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/adamthewizard"><span className="footerIcon"><i className="fab fa-github-square"></i></span></a>
                </div>
                <p className="footerText">Created by AdamTheWizard © 2018 All Rights Reserved</p>
            </div>
        )
    }
}