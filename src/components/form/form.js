import React, {Component} from 'react';
import {Formik, Form} from 'formik';
import {INITIAL_VALUES, VALIDATION_SCHEMA} from './constants/form-config';
import {renderControls} from './services/control-factory';
import {getServerResponse} from '../../services/helpers';
import styles from './form.module.css';

class FormBase extends Component {
    componentDidMount() {
        console.log('Form initialized with ', INITIAL_VALUES);
    }

    onSubmit = async (values, {setSubmitting}) => {
        const {changeIsSubmitting} = this.props;
        changeIsSubmitting(true);

        const response = await getServerResponse(values);

        setSubmitting(false);
        changeIsSubmitting(false);

        console.log('Submitted with ', response);
    };

    render() {
        const {formRef} = this.props;

        return (
          <Formik
            ref={formRef}
            initialValues={INITIAL_VALUES}
            onSubmit={this.onSubmit}
            validationSchema={VALIDATION_SCHEMA}
          >
              {
                  ({errors, touched, dirty}) => {
                      return (
                        <Form className={styles.fields}>
                            <p>Form is {dirty ? 'dirty': 'pristine'}</p>

                            {renderControls(errors, touched)}
                        </Form>
                      )
                  }
              }
          </Formik>
        );
    }

}

export const TestForm = React.forwardRef((props, ref) => <FormBase formRef={ref} {...props} />);
