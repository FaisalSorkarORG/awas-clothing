import React from "react";
import SignIn from "../sign-in/sign-in.component";
import './sign-in-sign-up.styles.scss';
import SignUp from "../sign-up/sign-up.component";

const SignInAndSignUp = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;