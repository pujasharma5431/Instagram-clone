import React, {Component} from 'react';
import './LoginPage.css'
import Grid from '@material-ui/core/Grid';
import insta_image from '../images/9364675fb26a.svg'
import insta_logo from '../images/logoinsta.png'

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
                    <Grid item xs={6} >
                        <div className={"loginpage_main"}>
                            <div>
                                <img src={insta_image} width={"454px"}/>
                            </div>
                            <div>
                                <div className={"loginpage_rightcomponent"}>
                                    <img className={"loginpage_logo"} src={insta_logo}/>
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