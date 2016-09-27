import React from 'react';
import {Link} from 'react-router';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'about me';
    }
    render() {
        return (
            <section>
                <div className="sectionContent">
                    AboutMe<br />
                </div>
            </section>
        );
    }
}

export default AboutMe;
