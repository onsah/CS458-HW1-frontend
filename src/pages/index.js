import React, { Component } from 'react';
import Header from '../components/Header';

class Main extends Component {
    render() {
        return (
            <div>
                {/* TODO: redirect if logged in */}
                <Header />
            </div>
        );
    }
}

export default Main;