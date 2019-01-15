import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import DropdownControl from '../../../common/dropdown/dropdown';
import {OPTIONS} from '../../../../constants/options';

export const Dropdown = ({name, hasError}) => {
    const renderDropdown = ({field}) => {
        const controlProps = {
            field,
            hasError,
            values: OPTIONS
        };
        return (<DropdownControl {...controlProps} />);
    };

    return (
      <Field
        name={name}
        render={renderDropdown}
      />
    );
};

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    hasError: PropTypes.bool
};

Dropdown.defaultProps = {
    hasError: false
};
