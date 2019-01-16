import React, {Component} from 'react';
import {Field} from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';

export class Switch extends Component {
    renderSwitch = ({field}) => {
        const {value, name} = field;

        return (
          <FormControlLabel
            control={
                <SwitchElement
                  {...field}
                  checked={value}
                  value={name}
                  color="primary"
                />
            }
            label="Switch"
          />
        );
    };

    render() {
        return (
          <Field
            fullWidth
            name={this.props.name}
            render={this.renderSwitch}
          />
        );
    }
}
