import React from "react"

export class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a ref="#">Accueil</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
