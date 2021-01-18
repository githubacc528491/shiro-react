import React from "react"
import {Navibar} from "../Navibar/Navibar";
import Dictaphone from "../Dictaphone/Dictaphone";


export class Speech extends React.Component {
    render() {
        return(
            <div>
                <Navibar/>
                <h1>Hello Speech</h1>
                <Dictaphone/>
            </div>

        )
    }
}
