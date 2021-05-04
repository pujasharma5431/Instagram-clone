import React, {Component} from 'react';
import './Navbar.css'
import {Avatar, Grid} from "@material-ui/core";
import instagram from '../../images/logoinsta.png'
import home from '../../images/home.svg'
import message from '../../images/message.svg'
import find from '../../images/find.svg'
import reacta from '../../images/share.svg'
import avatar from '../../images/dp.jpg'


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className={"navbar_barContent"}>
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                         <img src={instagram} width={"185px"}/>

                        </Grid>
                        <Grid item xs={3}>
                            <input type={"text"} placeholder={"Search"} className={"search_navbar"}/>
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}} className={"icon_Navbar"}>
                              <img className={"navbar_img"} src={home} width={"50px"} />
                              <img className={"navbar_img"} src={find} width={"50px"}/>
                              <img className={"navbar_img"} src={message} width={"50px"}/>
                              <img className={"navbar_img"} src={reacta} width={"50xp"}/>
                              <Avatar className={"avatar"} src={avatar}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Navbar;