import React from 'react';
import {Link} from 'react-router';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Contact';
    }
    render() {
        return (
            <section>
                <div className="sectionContent">
                    Contact<br />
                </div>
            </section>
        );
    }
}

export default Contact;
