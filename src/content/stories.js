import React from 'react';
import {Link} from 'react-router';

class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Stories';
    }
    render() {
        return (
            <section>
                <div className="sectionContent">
                    Stories<br />
                </div>
            </section>
        );
    }
}

export default Stories;
