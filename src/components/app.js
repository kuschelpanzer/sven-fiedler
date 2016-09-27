import React from "react";
import {connect} from "react-redux";
import Navi from "../navigation/navigation";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "App";
    }

    render() {
        return (
            <main>
                <Navi/>
                {this.props.children}
            </main>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        lang : state.language
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
