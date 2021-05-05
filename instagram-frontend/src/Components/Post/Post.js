import React, {Component} from 'react';
import './Post.css'
import {Avatar} from "@material-ui/core";
import dp from '../../images/pokhara.jpg'
import meena from '../../images/meena'
import love from '../../images/love.svg'
import comment from '../../images/comment.svg'
import share from '../../images/share.svg'

class Post extends Component {
    render() {
        return (
            <div className={"post_container"}>
                {/*Header*/}
                <div className={"post_header"}>
                    <Avatar className={"post_user_image"} src={dp}/>
                    <div className={"post_username"}>arjungautam1</div>
                </div>
                {/*Image*/}
                <div>
                    <img src={meena} width={"615px"}/>
                </div>
                {/*Analytics*/}
                <div>
                    <div>
                        <img src={love} className={"post_react"}/>
                        <img src={comment} className={"post_react"}/>
                        <img src={share} className={"post_react"}/>
                    </div>
                    <div style={{"fontWeight":"bold","marginLeft":"10px"}}>
                        71454 likes
                    </div>
                </div>
                {/*Comment section*/}
                <div>
                    <div className={"post_comment"}><b>arjungautam</b> Looking Good.  </div>
                    <div className={"post_comment"}><b>its_me_pooja</b> Looking Adorable.</div>
                    <div className={"time_post"}>1 DAY AGO</div>

                    <input type={"text"} className={"comment"} placeholder={"Add a comment..."}/>
                </div>
            </div>
        );
    }
}

export default Post;