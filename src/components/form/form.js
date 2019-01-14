import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import * as CONFIG from './constants/form-config';
import {TextInput} from './components/text-input/text-input';
import {Dropdown} from './components/dropdown/dropdown';
import {Autocomplete} from './components/autocomplete/autocomplete';
import {Switch} from './components/switch/switch';
import * as CONTROL_TYPE from '../../constants/control-types';
import {renderError, shouldDisplayError} from '../../services/control-errors';
import './form.css';

export const TestForm = () => {

    const renderControls = (errors, touched) => {
        let control = null;

        return Object.entries(CONFIG.FORM_SCHEMA).map(([name, {type}]) => {
            const hasError = shouldDisplayError(errors, touched, name);

            const commonProps = {
                name,
                hasError
            };

            switch(type) {
                case CONTROL_TYPE.DROPDOWN:
                    control = <Dropdown
                      {...commonProps}
                    />;
                    break;
                case CONTROL_TYPE.AUTOCOMPLETE:
                    control = <Autocomplete
                      {...commonProps}
                      type={control.autocompleteType}
                    />;
                    break;
                case CONTROL_TYPE.SWITCH:
                    control = <Switch
                      {...commonProps}
                    />;
                    break;
                case CONTROL_TYPE.TEXT:
                default:
                    control = <TextInput
                      {...commonProps}
                    />;
            }

            return (
              <Fragment key={name}>
                  {control}
                  {hasError && renderError(name)}
              </Fragment>
            )
        });
    };

    const onSubmit = values => {
        console.log(values)
    };

    return (
      <Formik
        initialValues={CONFIG.INITIAL_VALUES}
        onSubmit={onSubmit}
        validationSchema={CONFIG.VALIDATION_SCHEMA}
      >
          {
              ({errors, touched}) => (
                  <Form>
                      <div className="fields">
                          {renderControls(errors, touched)}
                      </div>
                  </Form>
              )
          }
      </Formik>
    );
};
