import React, {Component} from 'react';
import {Field} from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';

export class Switch extends Component {
    state = {
        checked: false
    };

    handleChange = event => {
        this.setState({ checked: event.target.checked });
    };

    renderSwitch = () => {
        return (
          <FormControlLabel
            control={
                <SwitchElement
                  checked={this.state.checked}
                  onChange={this.handleChange}
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
};
