import React from "react";
import {FontIcon, RaisedButton} from "material-ui";
import {loginWithGoogle} from "../helpers/auth";
import {firebaseAuth} from "../config/constants";

firebaseAuth().getRedirectResult().then(function(result) {
    console.log("GoogleLogin Redirect result");
    if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
    }
    // The signed-in user info.
    var user = result.user;
    console.log("user:", JSON.stringify(user));
}).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
});

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleGoogleLogin() {
        loginWithGoogle()
           /* .then(function () {
                this.props.history.push("/app/home");
            }.bind(this))
            .catch(function (error) {
                // show toast for failure and stay on the same page
                console.error("login failure.", error);
            })*/;



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
                        onClick={this.handleGoogleLogin}
                    />
                </div>
            </div>
        )
    }
}
