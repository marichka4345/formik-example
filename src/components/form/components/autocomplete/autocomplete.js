import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import {AUTOCOMPLETE_TYPE} from './constants/types';
import AutocompleteControl from '../../../common/autocomplete/autocomplete';
import {OPTIONS} from '../../../../constants/options';

const options = OPTIONS.map(({id: value, value: label}) => ({value, label}));

export const Autocomplete = ({name, type, hasError}) => {
    const renderAutocomplete = ({field, form}) => {
        const controlProps = {
            field,
            form,
            type,
            hasError,
            options
        };
        return <AutocompleteControl {...controlProps} />
    };

    return (
      <Field name={name}>
          {renderAutocomplete}
      </Field>
    );
};

Autocomplete.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    hasError: PropTypes.bool
};

Autocomplete.defaultProps = {
    type: AUTOCOMPLETE_TYPE.SINGLE,
    hasError: false
};
