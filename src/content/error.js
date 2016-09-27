import React from 'react';
import {Link} from 'react-router';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    render() {
        return(
            <section>
                <div className="sectionContent">
                    Die von Ihnen angeforderte Seite konnte nicht gefunden werden.<br />
                    <Link to="/">Hier geht es zurück zur Startseite</Link>
                </div>
            </section>
        );
    }
}

export default Error;
