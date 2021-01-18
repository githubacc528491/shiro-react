import React, { Component } from "react";
import "./App.css";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Form from "./components/Form";
import {Navibar} from "./components/Navibar";
import {Accueil} from "./components/Accueil";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        return (
            <div className="App">
                <Navibar/>
                <Router>
                    <div className="Container">
                        <Route path="/Accueil" component={Accueil}></Route>
                        <Route path="/Speech" component={Form}></Route>
                        <Route path="/" exact component={Accueil}></Route>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
