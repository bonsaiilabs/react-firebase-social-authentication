import React from "react";
import {Avatar, RaisedButton} from "material-ui";
import {logout} from "../helpers/auth";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firebaseUser: JSON.parse(localStorage.getItem("firebaseUser"))
        };

        //console.log("User:", this.state.firebaseUser);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        logout().then(function () {
            localStorage.removeItem("firebaseUser");
        });
        this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h3>Welcome {this.state.firebaseUser.user.displayName}</h3>
                <Avatar src={this.state.firebaseUser.user.photoURL}/>

                <div>
                    <RaisedButton
                        backgroundColor="#a4c639"
                        labelColor="#ffffff"
                        label="Sign Out"
                        onTouchTap={this.handleLogout}
                    />
                </div>
            </div>
        );
    }
}