import React, { Component, Fragment } from "react";
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { DynamicInputText, DynamicInputSelect } from './DynamicInputElements';

class DynamicForm extends Component {

    constructor(props) {
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBlur = (e) => {
        console.log('blur...' + e.target.value);
        // this.props.onBlur(e.target.name, e.target.value)
    };

    handleChange = (e) => {
        console.log('change...' + e.target.value);
        // let value = e.target.value;
        // const lowerCaseString = value.toLowerCase();
        // var isTrueSet = (lowerCaseString === 'true' || lowerCaseString === 'false');
        // if (isTrueSet) {
        //     value = !(lowerCaseString === 'true');
        // }
        // this.props.onChange(e.target.name, value)
    };

    handleSubmit = (value) => {
        console.log(value);
        // this.props.onSubmit(value)
    };

    renderFields(inputs) {
        return inputs.map(input => {
            if (input.type === 'password' || input.type === 'input') {
                return (
                    <Fragment key={input.name}>
                        <DynamicInputText input={input} handleBlur={this.handleBlur} handleChange={this.handleChange} />
                    </Fragment>
                );
            }

            if (input.type === 'select') {
                return (
                    <Fragment key={input.name}>
                        <DynamicInputSelect input={input} handleBlur={this.handleBlur} handleChange={this.handleChange} />
                    </Fragment>
                );
            }

            return (
                <div key={input.name}>
                    Missing render for input type
                </div>
            );
        })
    }

    getInitialValues(inputs) {
        const initialValues = {};
        inputs.forEach(field => {
            if (!initialValues[field.name]) {
                initialValues[field.name] = field.value;
            }
        });
        return initialValues;
    }

    render() {
        const initialValues = this.props.fields ? this.getInitialValues(this.props.fields) : {};
        return (
            <div>
                {this.props.fields &&
                    <Formik
                        onSubmit={(value) => { this.handleSubmit(value) }}
                        validationSchema={this.props.validation}
                        initialValues={initialValues}
                    >
                        {(form) => {
                            return (
                                <form onSubmit={form.handleSubmit}>
                                    {this.renderFields(this.props.fields)}
                                    {this.props.submitText &&
                                        <input className='dynamic-form-submit' value={this.props.submitText} type="submit" />
                                    }
                                </form>
                            );
                        }}
                    </Formik>
                }
            </div>
        );
    }
}

DynamicForm.propTypes = {
    /**
    * Fields description
    */
    fields: PropTypes.array.isRequired,
    validation: PropTypes.object.isRequired,
    submitText: PropTypes.string,
    // Functions
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};

export default DynamicForm;
