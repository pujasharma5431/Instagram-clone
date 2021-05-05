import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import './MainContent.css'
import StoryBar from "../StoryBar/StoryBar";
import MainPage from "../MainPage/MainPage";
import InfoSection from "../InfoSection/InfoSection";
import Suggestions from "../Suggestions/Suggestions";
class MainContent extends Component {
    render() {
        return (
            <div>
               <Grid container>
                   <Grid item xs={3}></Grid>
                   <Grid item xs={6}>
                   <StoryBar/>
                   <MainPage/>
                   </Grid>
                   <Grid item xs={2}>
                       <InfoSection/>
                       <Suggestions/>
                   </Grid>
                   <Grid item xs={1}></Grid>
               </Grid>
            </div>
        );
    }
}

export default MainContent;