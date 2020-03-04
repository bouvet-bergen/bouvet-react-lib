import React, { Component } from 'react';
import * as Yup from 'yup';
import { DynamicForm } from 'bouvet-react-lib';
import Data from '../../data/components.json';

const fields = [
  { label: 'Epost', id: 'email', type: 'input', name: 'email', value: '', required: true, classNames: 'email' },
  { label: 'Password', id: 'password', type: 'select', name: 'password', value: '', required: false, classNames: 'password', options: [{ value: 'volvo', text: 'Volvo', selected: true }, { value: 'audi', text: 'Audi', selected: false }] }
];

const validation = Yup.object().shape({
  email: Yup.string().required('Påkrevd')
});

class Home extends Component {
  
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

export default Home;
