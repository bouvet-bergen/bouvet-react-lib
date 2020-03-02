import React from 'react';
import { Field } from 'formik';

const DynamicInputText = (props) => {
    const { input, handleBlur, handleChange } = props;
    return (
        <Field name={input.name}>
            {(props) => {
                const { field } = props;
                const { errors, touched } = props.form;
                const hasError = errors[input.name] && touched[input.name] ? true : false;
                const errorText = hasError ? errors[input.name] : '';
                const mainClassName = hasError ? 'dynamic-input-text dynamic-input-text__error ' : 'dynamic-input-text ';
                const classNames = mainClassName + input.classNames;
                return (
                    <div className={classNames}>
                        <label className='dynamic-input-label' htmlFor={input.id}>{input.label}
                        {input.required &&
                            <span className='required'>*</span>
                        }
                        </label>
                        
                        <input
                            type={input.type}
                            name={input.id}
                            required={input.required}
                            id={input.id}
                            {...field}
                            onBlur={e => { handleBlur(e); field.onBlur(e); }}
                            onChange={e => { handleChange(e); field.onChange(e); }}
                        />

                        {errorText &&
                            <div className='error'>{errorText}</div>
                        }
                    </div>
                );
            }}
        </Field>
    );
};

export default DynamicInputText;
