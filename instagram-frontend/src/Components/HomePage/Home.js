import React, {Component} from 'react';
import './Home.css'
import Navbar from "../NavBar/Navbar";
import MainContent from "../MainContent/MainContent";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <MainContent/>
            </div>
        );
    }
}

export default Home;