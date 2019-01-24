import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';

export const RadioGroup = ({name, hasError, groupName, options}) => {
    const renderControl = ({field}) => (
      <FormControl
        margin="dense"
        error={hasError}
      >
          <FormLabel>{groupName}</FormLabel>
          <MuiRadioGroup {...field}>
              {
                  options.map(({id: value, value: label}) => (
                    <FormControlLabel
                      key={value}
                      control={<Radio color='primary' />}
                      label={label}
                      value={String(value)}
                    />
                  ))
              }
          </MuiRadioGroup>
      </FormControl>
    );

    return (
      <Field
        name={name}
        render={renderControl}
      />
    );
};

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    groupName: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
};

RadioGroup.defaultProps = {
    hasError: false
};
