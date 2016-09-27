import React from 'react';
import {Link} from 'react-router';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Content';
    }
    render() {
        return (
            <section>
                <div className="sectionContent">
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                Herzlich willkommen<br /><br /><br /><br /><br /><br />
                <Link to="/test">Hier geht es zurück zur Startseite</Link>
                </div>
            </section>
        );
    }
}

export default Content;
