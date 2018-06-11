import React from "react";

export class ProfileCard extends React.Component {
    render(){
        return (
            <div className="profileCardContainer">
                {this.props.firstname}
            </div>
        )
    }
}
