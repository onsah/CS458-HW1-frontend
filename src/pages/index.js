import React, { Component } from 'react';
import Header from '../components/Header';
import { loginContext } from '../contexts/LoginContext';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class MainImpl extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        if (loginContext.isLoggedIn()) {
            this.props.history.push("/welcome");
        }
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

const Main = withRouter(MainImpl);

export default Main;