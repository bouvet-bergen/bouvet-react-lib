import React, { Component } from 'react';
import * as Yup from 'yup';
import { DynamicForm } from 'bouvet-react-lib';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { types } from '../../Common/types';
import Data from '../../Data/components.json';

const fields = [
  { label: 'Epost', id: 'email', type: 'input', name: 'email', value: '', required: true, classNames: 'email' },
  { label: 'Password', id: 'password', type: 'select', name: 'password', value: '', required: false, classNames: 'password', options: [{ value: 'volvo', text: 'Volvo', selected: true }, { value: 'audi', text: 'Audi', selected: false }] }
];

const validation = Yup.object().shape({
  email: Yup.string().required('Påkrevd')
});

class Home extends Component {

  constructor(props) {
    super(props);
   }

  componentDidMount() {
    this.props.initApplication();
  }
  
  render() {
    var testDoc = Data.filter(x => x.displayName === 'DynamicForm');
    console.log(testDoc[0]);
    return (
      <div>
        <DynamicForm fields={fields} validation={validation} submitText='Send' />
      </div>
    )
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

Home.propTypes = {
  // Properties

  // Functions
  initApplication: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
