import React, {Component} from 'react';
import '../LoginPage/LoginPage.css'
class SignIn extends Component {
    render() {
        return (
            <div>
                <input className={"loginpage_text"} type={"text"}
                       placeholder={"Phone number, username, or email"}/>
                <input className={"loginpage_text"} type={"Password"} placeholder={"Password"}/>
                <button className={"loginpage_button"} type={"submit"}>Log In</button>

            </div>
        );
    }
}

export default SignIn;