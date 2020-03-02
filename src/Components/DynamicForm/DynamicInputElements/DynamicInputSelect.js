import React from 'react';
import { Field } from 'formik';

const DynamicInputSelect = (props) => {
    const { input, handleChange } = props;
    return (
        <Field name={input.name}>
            {(props) => {
                const { field } = props;
                const { errors, touched } = props.form;
                const hasError = errors[input.name] && touched[input.name] ? true : false;
                const errorText = hasError ? errors[input.name] : '';
                const mainClassName = hasError ? 'dynamic-input-select dynamic-input-select__error ' : 'dynamic-input-select ';
                const classNames = mainClassName + input.classNames;
                const options = input.options.map((opt) => <option key={opt.value} value={opt.value}>{opt.text}</option>);
                const selected = input.options.filter(opt => opt.selected)[0];
                  
                return (
                    <div className={classNames}>
                        <label className='dynamic-input-label' htmlFor={input.id}>{input.label}
                            {input.required &&
                                <span className='required'>*</span>
                            }
                        </label>
                        <select id={input.id} value={selected.value} onChange={e => { handleChange(e); field.onChange(e); }}>
                            {options}
                        </select>

                        {errorText &&
                            <div className='error'>{errorText}</div>
                        }
                    </div>
                );
            }}
        </Field>
    );
};

export default DynamicInputSelect;
