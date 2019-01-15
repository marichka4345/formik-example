import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

export default function RadioGroupControl ({groupName, field, hasError, values}) {
    return (
      <FormControl>
          <FormLabel>{groupName}</FormLabel>
          <RadioGroup {...field}>
              {
                  values.map(({id: value, value: label}) => (
                    <FormControlLabel
                      key={value}
                      control={<Radio/>}
                      label={label}
                      value={String(value)}
                    />
                  ))
              }
          </RadioGroup>
      </FormControl>
    );
}

RadioGroupControl.propTypes = {
    groupName: PropTypes.string.isRequired,
    field: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
    values: PropTypes.array.isRequired
};

RadioGroupControl.defaultProps = {
    hasError: false
};


