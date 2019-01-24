import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import Select from 'react-select';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import NoSsr from '@material-ui/core/NoSsr';
import {AUTOCOMPLETE_TYPE} from '../../../../constants/autocomplete-types';
import {OPTIONS} from '../../../../constants/options';

const options = OPTIONS.map(({id: value, value: label}) => ({value, label}));

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

const getSelectErrorStyle = hasError => ({
    control: provided => ({
        ...provided,
        borderColor: hasError ? 'red' : '#ccc'
    })
});

export class Autocomplete extends Component {
    state = {
        selectedOption: null
    };

    onChange = async (selectedOption, setFieldValue) => {
        const {
            name,
            autocompleteType
        } = this.props;

        await this.setState({selectedOption});

        const value = autocompleteType === AUTOCOMPLETE_TYPE.SINGLE
          ? selectedOption.value
          : selectedOption.map(({value}) => value);

        setFieldValue(name, value);
    };

    renderControl = ({field, form}) => {
        const {
            autocompleteType,
            hasError,
            name
        } = this.props;

        return (
          <FormControl
            margin="dense"
            error={hasError}
            fullWidth
          >
              <FormLabel>{name}</FormLabel>
              <NoSsr>
                  <Select
                    styles={getSelectErrorStyle(hasError)}
                    options={options}
                    placeholder="Search a value"
                    value={this.state.selectedOption}
                    onChange={selectedOption => this.onChange(selectedOption, form.setFieldValue)}
                    isMulti={autocompleteType === AUTOCOMPLETE_TYPE.MULTI}
                    components={components}
                  />
              </NoSsr>
          </FormControl>
        );
    };

    render() {
        const {name} = this.props;

        return (
          <Field
            name={name}
            render={this.renderControl}
          />
        );
    }
};

Autocomplete.propTypes = {
    name: PropTypes.string.isRequired,
    autocompleteType: PropTypes.string,
    hasError: PropTypes.bool
};

Autocomplete.defaultProps = {
    autocompleteType: AUTOCOMPLETE_TYPE.SINGLE,
    hasError: false
};
