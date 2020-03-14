import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navigation } from './';
import { types } from '../../Common/types';

class Layout extends Component {

    componentDidMount() {
        this.props.initApplication();
    }

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

const mapStateToProps = state => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        initApplication: () => dispatch({ type: types.application.INIT_APPLICATION, payload: null })
    };
}

Layout.propTypes = {
    // Properties

    // Functions
    initApplication: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

