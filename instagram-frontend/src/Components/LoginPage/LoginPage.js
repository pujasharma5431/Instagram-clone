import React, {Component} from 'react';
import './LoginPage.css'
import Grid from '@material-ui/core/Grid';
import insta_image from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png'
import appstore from '../../images/app.png'
import playstore from '../../images/play.png'
import SignIn from "../Signin/SignIn";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={6}>
                        <div className={"loginpage_main"}>
                            <div>
                                <img src={insta_image} width={"465px"} alt={"Instagram"}/>
                            </div>
                            <div>
                                <div className={"loginpage_rightcomponent"}>
                                    <img className={"loginpage_logo"} src={insta_logo} alt={"insta log"}/>

                                    <div className={"loginpage_signin"}>

                                        <SignIn/>

                                        <div className={"logor"}>
                                            <div className={"logindash"}></div>
                                            <div className={"login_or"}>OR</div>
                                            <div className={"logindash"}></div>
                                        </div>

                                        <div className={"fb"}>
                                            <img src={fb} width={"16px"} style={{marginRight: "5px"}} alt={"Facebook"}/>
                                            Log in ith facebook
                                        </div>

                                        <div className={"fb_forget"}>Forget password?</div>
                                    </div>
                                </div>
                                <div className={"signup"}>
                                    <div>Don't have an account? <span
                                        style={{"fontWeight": "bold", "color": "#0595F7"}}> SignUp</span></div>
                                    <div>Already have an account? <span
                                        style={{"fontWeight": "bold", "color": "#0595F7"}}>Login</span></div>
                                </div>
                                <div>
                                    <div style={{"text-align": "center", "margin": "15px"}}>
                                        Get the app
                                    </div>
                                    <div style={{"text-align": "center","margin-left":"19px"}}>
                                        <img src={playstore} height={"40px"} style={{"margin-right": "5px","margin-left":"10px"}} alt={"Play Store"}/>
                                        <img src={appstore} width={"138px"} style={{"margin-left":"9px"}} alt={"app store"}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;