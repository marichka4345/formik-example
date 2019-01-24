import React from 'react';
import {Formik, Form} from 'formik';
import * as CONFIG from './constants/form-config';
import {renderControls} from './services/control-factory';
import {sleep} from '../../services/helpers';
import styles from './form.module.css';

export const TestForm = React.forwardRef(({changeIsSubmitting}, ref) => {

    const onSubmit = async (values, {setSubmitting, setErrors}) => {
        changeIsSubmitting(true);

        await sleep(1000);

        setSubmitting(false);
        changeIsSubmitting(false);
        alert('Submitted');
        console.log(values);

        // To display server error after successful validation:
        //
        // setErrors({text1: 'Test error'});
    };

    return (
        <Formik
          ref={ref}
          initialValues={CONFIG.INITIAL_VALUES}
          onSubmit={onSubmit}
          validationSchema={CONFIG.VALIDATION_SCHEMA}
        >
            {
                ({errors, touched}) => {
                    return (
                      <Form className={styles.fields}>
                          {renderControls(errors, touched)}
                      </Form>
                    )
                }
            }
        </Formik>
    );
});
