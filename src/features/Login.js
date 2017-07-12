import React from "react";
import {FontIcon, RaisedButton} from "material-ui";
import {loginWithGoogle} from "../helpers/auth";

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleGoogleLogin() {
        loginWithGoogle()
            .then(function () {
                this.props.history.push("/app/home");
            }.bind(this))
            .catch(function (error) {
                // show toast for failure and stay on the same page
                console.error("login failure.", error);
            });
    }

    render() {
        const iconStyles = {
            color: "#ffffff"
        };

        return (
            <div>
                <h1>Login</h1>
                <div>
                    <RaisedButton
                        label="Sign in with Google"
                        labelColor={"#ffffff"}
                        backgroundColor="#dd4b39"
                        icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
                        onTouchTap={this.handleGoogleLogin}
                    />
                </div>
            </div>
        )
    }
}
