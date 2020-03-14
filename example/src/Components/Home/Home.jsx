import React, { Component } from 'react';
// import * as Yup from 'yup';
// import { DynamicForm } from 'bouvet-react-lib';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
 
// import { types } from '../../Common/types';


// const fields = [
//   { label: 'Epost', id: 'email', type: 'input', name: 'email', value: '', required: true, classNames: 'email' },
//   { label: 'Password', id: 'password', type: 'select', name: 'password', value: '', required: false, classNames: 'password', options: [{ value: 'volvo', text: 'Volvo', selected: true }, { value: 'audi', text: 'Audi', selected: false }] }
// ];

// const validation = Yup.object().shape({
//   email: Yup.string().required('Påkrevd')
// });

class Home extends Component {

  render() {
    // var testDoc = DataComponents.filter(x => x.displayName === 'DynamicForm');
    // var testModule = DataModules.docs;
    // var testModule = DataModules.docs.filter(x => x.kind !== 'package' && x.meta.filename === 'WebClient.js');
    // console.log(DataComponents);
    // console.log(testDoc[0]);
    // console.log(testModule);
    return (
      <div>
        <h1>Home</h1>
        
        {/* <DynamicForm fields={fields} validation={validation} submitText='Send' /> */}
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
     
  };
}

Home.propTypes = {
  // Properties

  // Functions

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
