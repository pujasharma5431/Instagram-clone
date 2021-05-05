import React, {Component} from 'react';
import './StoryBar.css'
import {Avatar} from "@material-ui/core";
import arjun from '../../images/pokhara.jpg'
import japan from '../../images/sundarijal'

class StoryBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyList: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username": "its_me_puja",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620202290/WhatsApp_Image_2021-05-04_at_6.46.49_PM_u3rvux.jpg"
            },
            {
                "username": "puja_sharma",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620202290/WhatsApp_Image_2021-05-04_at_6.46.50_PM_zfjjxj.jpg"
            },
            {
                "username": "meena",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219852/viber_image_2021-05-04_17-43-27_o5kian.jpg"
            },
            {
                "username": "aarjoo",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620202290/WhatsApp_Image_2021-05-04_at_6.47.58_PM_bxcpsm.jpg"
            },
            {
                "username": "madam",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620202290/WhatsApp_Image_2021-05-04_at_6.46.52_PM_uktgyn.jpg"
            },
            {
                "username": "Arjun Codes",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620202828/Youtube_alje4c.gif"
            },

            {
                "username": "Travel",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620203036/arj_vlfl8n.jpg"
            },
            {
                "username": "arjun",
                "imageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1617037181/medium_hero_image_13ec18f3f3.png"
            },




        ]
        this.setState({storyList: data})
    }


    render() {
        return (
            <div>
                <div className={"story_box"}>
                    {
                        this.state.storyList.map((item, index) => (
                            <div className={"story"}>
                                <Avatar className={"story_avatar"} src={item.imageURL}/>
                                <div className={"username"}>{item.username}</div>
                            </div>
                        ))
                    }


                </div>

            </div>
        );
    }
}

export default StoryBar;