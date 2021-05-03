import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div >
                <input className={"loginpage_text"} type={"text"}
                       placeholder={"Mobile Number or Email"}/>
                <input className={"loginpage_text"} type={"text"}
                       placeholder={"Full Name"}/>
                <input className={"loginpage_text"} type={"text"}
                       placeholder={"Username"}/>

                <input className={"loginpage_text"} type={"Password"} placeholder={"Password"}/>
                <button className={"loginpage_button"} type={"submit"}>Sign up</button>

            </div>
        );
    }
}

export default SignUp;