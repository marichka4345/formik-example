import React, {Fragment} from 'react';
import * as CONFIG from '../constants/form-config';
import {Dropdown} from '../components/dropdown/dropdown';
import {Autocomplete} from '../components/autocomplete/autocomplete';
import {Switch} from '../components/switch/switch';
import {RadioGroup} from '../components/radio-group/radio-group';
import {DraftJs} from '../components/draft-js/draft-js';
import {TextInput} from '../components/text-input/text-input';
import {renderError, shouldDisplayError} from '../../../services/errors';
import * as CONTROL_TYPE from '../../../constants/control-types';
import {OPTIONS} from '../../../constants/options';

export const renderControls = (errors, touched) => {
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
                  options={OPTIONS}
                />;
                break;
            case CONTROL_TYPE.AUTOCOMPLETE:
                control = <Autocomplete
                  {...commonProps}
                  autocompleteType={autocompleteType}
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
                  options={OPTIONS}
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
