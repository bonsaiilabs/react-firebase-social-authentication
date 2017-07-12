import React from "react";
import {FontIcon, RaisedButton} from "material-ui";
import {googleLogin} from "../helpers/auth";

export default class Login extends React.Component {

    handleGoogleLogin() {
        console.log("Google Login");
        googleLogin()
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
