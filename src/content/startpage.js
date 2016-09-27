import React from 'react';
import {Link} from 'react-router';

class Startpage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Startpage';
    }
    render() {
        return (
            <section>
                <div className="sectionContent">
                Herzlich willkommen<br />
                </div>
            </section>
        );
    }
}

export default Startpage;
