import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import { auth } from "../../firebase/firebase.utils";
import { signInWithGoogle } from "../../firebase/firebase.utils";




class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I alrady have an account</h2>
                <span>Sign in woth your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>
                    {/* <label>Email</label> */}
                    <FormInput label="Password" name="password" type="password" value={this.state.password} handleChange={this.handleChange} required/>
                    {/* <label>Password</label> */}
                    <div className="buttons">
                        <CustomButton type="submit"> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }

}


export default SignIn;