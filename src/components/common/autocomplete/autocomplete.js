import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import {AUTOCOMPLETE_TYPE} from './constants/types';
import './autocomplete.css';

function MultiValue(props) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
}

const components = {
    MultiValue
};

export default class Autocomplete extends Component {
    state = {
        selectedOption: null
    };

    onChange = async (selectedOption) => {
        const {
            form: {setFieldValue},
            field: {name},
            type
        } = this.props;

        await this.setState({selectedOption});

        const value = type === AUTOCOMPLETE_TYPE.SINGLE
          ? selectedOption.value
          : selectedOption.map(({value}) => value);

        setFieldValue(name, value);
    };

    render() {
        const {
            hasError,
            options,
            type
        } = this.props;

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
                        value={this.state.selectedOption}
                        onChange={this.onChange}
                        textFieldProps={{
                            error: hasError
                        }}
                        isMulti={type === AUTOCOMPLETE_TYPE.MULTI}
                        components={components}
                      />
                  </NoSsr>
              </FormControl>
          </div>
        );
    }
}

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
