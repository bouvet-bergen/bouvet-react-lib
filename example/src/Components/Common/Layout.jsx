import React, { Component } from 'react';
import { Navigation } from './';

class Layout extends Component {

    render() {
        return (
            <main>
                <Navigation />
                <div className='main-container'>
                    {this.props.children}
                </div>
            </main>
        );
    }
}

export default Layout;
