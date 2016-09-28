import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/content';

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'about me';
        this.props.onload();
    }

    createMarkup(text) {
        return {__html: text};
    };

    render() {
        return(
            <section>
                { this.props.fetching ?
                    <div className="sectionContent">loading ... </div>
                    :
                    this.props.content ?
                        <div className="sectionContent">
                            <h2>{this.props.content.title}</h2>
                            <div dangerouslySetInnerHTML={this.createMarkup(this.props.content.description)} />
                        </div>
                        : <div className="sectionContent">Fehler</div>
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.content.content,
        fetching: state.content.isFetching
    };
};

const mapDispatchToMap = (dispatch) => {
    return {
        onload: () => {
            dispatch(actions.getContent('dummyData/aboutMe.json'));
        }
    }
};

const AboutMeConnected = connect(mapStateToProps,mapDispatchToMap)(AboutMe);
export default AboutMeConnected;
