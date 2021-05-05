import React, {Component} from 'react';
import Post from "../Post/Post";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: []
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        let post = [
            {
                "postId": "1234",
                "userName": "arjungautam1",
                "profileImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620203036/arj_vlfl8n.jpg",
                "postImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620203036/arj_vlfl8n.jpg",
                "timeStamp": "1235",
                "likes": "12314"
            },
            {
                "postId": "1234",
                "userName": "meena_gautam",
                "profileImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219852/viber_image_2021-05-04_17-43-27_o5kian.jpg",
                "postImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219852/viber_image_2021-05-04_17-43-27_o5kian.jpg",
                "timeStamp": "1235",
                "likes": "20K"
            },
            {
                "postId": "1234",
                "userName": "kitchen_world",
                "profileImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219882/www_vdygje.gif",
                "postImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219882/www_vdygje.gif",
                "timeStamp": "1235",
                "likes": "22K"
            },
            {
                "postId": "1234",
                "userName": "kitchen_world",
                "profileImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219871/abcd_ybfoou.gif",
                "postImageURL": "https://res.cloudinary.com/dn3kohivv/image/upload/v1620219871/abcd_ybfoou.gif",
                "timeStamp": "123512",
                "likes": "20K"
            },







        ];
        this.setState({postArray: post})
    }

    render() {
        return (
            <div>
                {
                    this.state.postArray.map((item, index) => (

                    <Post
                    id={item.postId}
                    username={item.userName}
                    profileImage={item.profileImageURL}
                    postimage={item.postImageURL}
                    likes={item.likes}
                    />
                    ))
                }
            </div>
        );
    }
}

export default MainPage;