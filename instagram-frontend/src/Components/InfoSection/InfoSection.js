import React, {Component} from 'react';
import './InfoSection.css'
import {Avatar} from "@material-ui/core";

class InfoSection extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={"infosection_container"}>
                <Avatar src={"https://res.cloudinary.com/dn3kohivv/image/upload/v1620203036/arj_vlfl8n.jpg"}/>
                <div className={"info"}>
                    <b>arjugautam</b>
                    <div className={"name"}>Arjun Gautam</div>
                </div>

            </div>
        );
    }
}

export default InfoSection;