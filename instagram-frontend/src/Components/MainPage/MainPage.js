import React, {Component} from 'react';
import Post from "../Post/Post";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </div>
        );
    }
}

export default MainPage;