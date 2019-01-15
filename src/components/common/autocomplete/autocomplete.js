import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
import './autocomplete.css';

export default class Autocomplete extends Component {
    state = {
        selectedOption: null
    };

    onChange = async (selectedOption) => {
        const {
            form: {setFieldValue},
            field: {name}
        } = this.props;

        await this.setState({selectedOption});

        setFieldValue(name, selectedOption.value);
    };

    render() {
        const {
            hasError,
            options
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
