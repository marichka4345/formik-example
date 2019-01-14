import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';

export default function TextInput ({hasError, field}) {
    const {name} = field;

    return (
      <TextField
        error={hasError}
        label={name}
        {...field}
      />
    );
};

TextInput.propTypes = {
    hasError: PropTypes.bool,
    field: PropTypes.object.isRequired
};

TextInput.defaultProps = {
    hasError: false
};
