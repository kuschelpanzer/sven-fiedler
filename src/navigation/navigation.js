import React from "react";
import {Link} from "react-router";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Navigation";
    }
    render() {
        return (
            <nav role="navigation">
                <div className="content">
                    <img src="images/logo.png" alt="logo" />
                    <ul className="navigation">
                        <h2><a href="/" title="Sven-Fiedler.de - Herzlich Willkommen">www.sven-fiedler.de</a></h2>
                        <li><a href="#">über mich</a></li>
                        <li><a href="#">Kontakt</a></li>
                        <li><a href="#">Geschichten</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
