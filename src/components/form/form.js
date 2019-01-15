import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import * as CONFIG from './constants/form-config';
import {TextInput} from './components/text-input/text-input';
import {Dropdown} from './components/dropdown/dropdown';
import {Autocomplete} from './components/autocomplete/autocomplete';
import {Switch} from './components/switch/switch';
import {RadioGroup} from './components/radio-group/radio-group';
import {DraftJs} from './components/draft-js/draft-js';
import * as CONTROL_TYPE from '../../constants/control-types';
import {renderError, shouldDisplayError} from '../../services/control-errors';
import './form.css';

export const TestForm = () => {

    const renderControls = (errors, touched) => {
        let control = null;

        return Object.entries(CONFIG.FORM_SCHEMA).map(([name, controlData]) => {
            const hasError = shouldDisplayError(errors, touched, name);

            const {
                type,
                autocompleteType,
                groupName
            } = controlData;

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
                      type={autocompleteType}
                    />;
                    break;
                case CONTROL_TYPE.SWITCH:
                    control = <Switch
                      {...commonProps}
                    />;
                    break;
                case CONTROL_TYPE.RADIOGROUP:
                    control = <RadioGroup
                      {...commonProps}
                      groupName={groupName}
                    />;
                    break;
                case CONTROL_TYPE.DRAFTJS:
                    control = <DraftJs
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
              ({errors, touched, values}) => (
                  <Form>
                      <div className="fields">
                          {renderControls(errors, touched)}
                      </div>

                      <pre>
                          {JSON.stringify(values, null, 2)}
                      </pre>
                  </Form>
              )
          }
      </Formik>
    );
};
