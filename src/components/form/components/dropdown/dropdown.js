import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import FormControl from '@material-ui/core/FormControl/FormControl';

export const Dropdown = ({name, hasError, options}) => {
    const renderControl = ({field}) => {
        return (
          <FormControl
            margin="dense"
            error={hasError}
          >
              <InputLabel>{name}</InputLabel>

              <Select {...field}>
                  {
                      options.map(({id, value}) => (
                        <MenuItem key={id} value={id}>{value}</MenuItem>
                      ))
                  }
              </Select>
          </FormControl>
        );
    };

    return (
      <Field
        name={name}
        render={renderControl}
      />
    );
};

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired
};
