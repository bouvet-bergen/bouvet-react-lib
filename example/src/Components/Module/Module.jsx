import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux'
import { withRouter } from "react-router";

import Constructor from './Constructor';
import Members from './Members';
import Methods from './Methods';
import './module.scss';

class Module extends Component {

  render() {

    const data = {
      mod: this.props.mod,
      id: this.props.match.params.id
    };

    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
        <Constructor data={ data } />
        <Members data={ data } />
        <Methods data={ data } />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mod: state.application.modules
  };
}

const mapDispatchToProps = dispatch => {
  return {

  };
}

Module.propTypes = {
  // Properties
  mod: PropTypes.array
  // Functions

};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Module);
// export default connect(mapStateToProps, mapDispatchToProps)(Module);
