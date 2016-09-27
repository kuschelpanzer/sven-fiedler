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
                        <h2><Link to="/" title="Sven-Fiedler.de - Herzlich Willkommen">www.sven-fiedler.de</Link></h2>
                        <li><Link to="/about_me" title="Über mich">über mich</Link></li>
                        <li><Link to="/contact" title="Kontakt">Kontakt</Link></li>
                        <li><Link to="/stories" title="Witzige und Dumme Geschichten">Geschichten</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;
