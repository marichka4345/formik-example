import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
import './autocomplete.css';

export default function Autocomplete ({
                                          hasError,
                                          field,
                                          form: {values, setFieldValue},
                                          options
                                      }) {
    const {name} = field;

    return (
      <div className="root">
          <FormControl
            fullWidth
            error={hasError}
          >
                <NoSsr>
                    <Select
                      options={options}
                      placeholder="Search a value"
                      value={values[name]}
                      onChange={selectedOption => setFieldValue(name, selectedOption)}
                      textFieldProps={{
                          error: hasError
                      }}
                    />
                </NoSsr>
          </FormControl>
      </div>
    );
};

Autocomplete.propTypes = {
    hasError: PropTypes.bool.isRequired,
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired
};
