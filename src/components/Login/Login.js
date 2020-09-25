import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function (result) {
            let { displayName, email } = result.user;
            const signnedInUser = { name: displayName, email }
            setLoggedInUser(signnedInUser);
            history.replace(from);

        })
    }

    return (
        <div className="loginForm rounded mt-5">
            <form action="" className="">
                <div className="form-group">
                    <label for="Origin">Username or Email</label>
                    <input type="text" id="username" class="form-control bg-light" placeholder="enter your email" />
                </div>

                <div className="form-group">
                    <label for="Destination">Password</label>
                    <input type="password" id="password" class="form-control bg-light" placeholder="Password" />
                </div>

                <div className="">
                    <div className="from-group d-flex justify-content-between ">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input"/>
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-warning">Forget Password</a>
                        </div>
                    </div>
                </div>
                <button className="btn btn-warning col-md-12">Login</button>
                <div className="form-group">
                    <p className="text-center">New User? <a href="/registration" className="text-warning ">SignUp Here</a></p>
                </div>
                <hr />
                <p className="text-center">Or</p>
            </form>

            <div className="">
                <button className="btn btn-outline-success col-md-12" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>

        </div>
    );
};

export default Login;
