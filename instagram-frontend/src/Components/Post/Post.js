import React, {Component} from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import dp from '../../images/pokhara.jpg'
import meena from '../../images/meena'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    componentDidMount() {
        this.getComment();
    }

    getComment = () => {
        let data = [
            {
                "username": "arjungautam1",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "You look adorable."
            },
            {
                "username": "its_me_pooja",
                "commentId": "123",
                "timeStamp": "123456",
                "description": "Lovely photo."
            },

        ];
        this.setState({commentList:data});
    }

    render() {
        return (
            <div className={"post_container"}>
                {/*Header*/}
                <div className={"post_header"}>
                    <Avatar className={"post_user_image"} src={this.props.profileImage}/>
                    <div className={"post_username"}>{this.props.username}</div>
                </div>


                {/*Image*/}
                <div>
                    <img src={this.props.postimage} width={"615px"}/>
                </div>


                {/*Analytics*/}
                <div>
                    <div>
                        <img src={love} className={"post_react"}/>
                        <img src={comment} className={"post_react"}/>
                        <img src={share} className={"post_react"}/>
                    </div>
                    <div style={{"fontWeight": "bold", "marginLeft": "10px"}}>
                        {this.props.likes} likes
                    </div>
                </div>
                {/*Comment section*/}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className={"post_comment"}> <b>{item.username} </b>: {item.description}</div>
                        ))
                    }

                    <div className={"time_post"}>1 DAY AGO</div>

                    <input type={"text"} className={"comment"} placeholder={"Add a comment..."}/>


                </div>
            </div>
        );
    }
}

export default Post;