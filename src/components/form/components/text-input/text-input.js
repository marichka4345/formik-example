import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import TextField from '@material-ui/core/TextField/TextField';

export const TextInput  = ({name, hasError}) => {

    const renderControl = ({field}) => {
        return (
          <TextField
            error={hasError}
            label={name}
            {...field}
          />
        );
    };

    return (
      <Field
        name={name}
        render={renderControl}
      />
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired
};
