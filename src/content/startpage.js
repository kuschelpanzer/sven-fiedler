import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../store/actions/content';

class Startpage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Startpage';
        this.props.onload();
    }
    render() {
        return(
            <section>
                { this.props.fetching ?
                    <div className="sectionContent">loading ... </div>
                    :
                     this.props.content.start ?
                        <div className="sectionContent">
                            {this.props.content.start.title}<br />
                        </div>
                    : <div className="sectionContent">Fehler</div>
                    }
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.content,
        fetching: state.content.isFetching
    };
};

const mapDispatchToMap = (dispatch) => {
    return {
        onload: () => {
            dispatch(actions.getContent('dummyData/start.json'));
        }
    }
};

const StartpageConnected = connect(mapStateToProps,mapDispatchToMap)(Startpage);
export default StartpageConnected;