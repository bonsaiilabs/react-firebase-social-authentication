import React from "react";
import {FontIcon, RaisedButton} from "material-ui";
import {loginWithGoogle} from "../helpers/auth";
import {firebaseAuth} from "../config/constants";


const firebaseAuthKey = "firebaseAuthInProgress";
const appTokenKey = "appToken";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            splashScreen: false
        };

        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleGoogleLogin() {
        loginWithGoogle()
            .catch(function (error) {
                alert(error); // or show toast
                localStorage.removeItem(firebaseAuthKey);
            });
        localStorage.setItem(firebaseAuthKey, "1");
    }

    componentWillMount() {
        /*         firebaseAuth().getRedirectResult().then(function(result) {
         if (result.user) {
         console.log("GoogleLogin Redirect result");
         if (result.credential) {
         // This gives you a Google Access Token. You can use it to access the Google API.
         let token = result.credential.accessToken;
         // ...
         }
         // The signed-in user info.
         let user = result.user;
         console.log("user:", JSON.stringify(user));
         }
         }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         // ...
         alert(error);
         })*/
        ;

        /**
         * We have appToken relevant for our backend API
         */
        if (localStorage.getItem(appTokenKey)) {
            this.props.history.push("/app/home");
            return;
        }

        firebaseAuth().onAuthStateChanged(user => {
            if (user) {
                console.log("User signed in: ", JSON.stringify(user));

                localStorage.removeItem(firebaseAuthKey);

                // here you could authenticate with you web server to get the
                // application specific token so that you do not have to
                // authenticate with firebase every time a user logs in
                localStorage.setItem(appTokenKey, user.uid);

                // store the token
                this.props.history.push("/app/home")
            }
        });
    }

    render() {
        console.log(firebaseAuthKey + "=" + localStorage.getItem(firebaseAuthKey));
        if (localStorage.getItem(firebaseAuthKey) === "1") return <SplashScreen />;
        return <LoginPage handleGoogleLogin={this.handleGoogleLogin}/>;
    }
}

const iconStyles = {
    color: "#ffffff"
};
const LoginPage = ({handleGoogleLogin}) => (
    <div>
        <h1>Login</h1>
        <div>
            <RaisedButton
                label="Sign in with Google"
                labelColor={"#ffffff"}
                backgroundColor="#dd4b39"
                icon={<FontIcon className="fa fa-google-plus" style={iconStyles}/>}
                onClick={handleGoogleLogin}
            />
        </div>
    </div>
);
const SplashScreen = () => (<p>Loading...</p>)
