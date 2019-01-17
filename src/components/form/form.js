import React from 'react';
import {Formik, Form} from 'formik';
import * as CONFIG from './constants/form-config';
import {renderControls} from './services/control-factory';
import styles from './form.module.css';

export const TestForm = React.forwardRef(({changeIsSubmitting}, ref) => {

    const onSubmit = (values, {setSubmitting}) => {
        changeIsSubmitting(true);

        new Promise(resolve => {
            setTimeout(resolve, 2000);
        }).then(() => {
            setSubmitting(false);
            changeIsSubmitting(false);
            console.log(values);
        });
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
