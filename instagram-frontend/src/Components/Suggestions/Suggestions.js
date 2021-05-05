import React, {Component} from 'react';
import {Avatar} from "@material-ui/core";
import './Suggestions.css'
import dp from '../../images/pokhara.jpg'
import meena from '../../images/meena'
import pooja from '../../images/sundarijal'
import black from '../../images/abcd.gif'

class Suggestions extends Component {

    render() {
        return (
            <div>
                <div className={"suggestion"}> Suggestions For You</div>
                <div className={"suggestion_img"}>
                    <Avatar className={"avatar_suggestion"} src={dp}></Avatar>
                    <div className={"info_sugg"}>
                        <div className={"name_sugg"}>Arjun Gautam</div>
                        <div className={"username_sugg"}>arjungautam1</div>
                    </div>
                </div>
                <div className={"suggestion_img"}>
                    <Avatar className={"avatar_suggestion"} src={meena}></Avatar>
                    <div className={"info_sugg"}>
                        <div className={"name_sugg"}>Meena Gautam</div>
                        <div className={"username_sugg"}>meena_g1</div>
                    </div>
                </div>
                <div className={"suggestion_img"}>
                    <Avatar className={"avatar_suggestion"} src={pooja}></Avatar>
                    <div className={"info_sugg"}>
                        <div className={"name_sugg"}>Pooja Poudel</div>
                        <div className={"username_sugg"}>its_me_pooja</div>
                    </div>
                </div>
                <div className={"suggestion_img"}>
                    <Avatar className={"avatar_suggestion"} src={black}></Avatar>
                    <div className={"info_sugg"}>
                        <div className={"name_sugg"}>Black Lady</div>
                        <div className={"username_sugg"}>black_lady7</div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Suggestions;