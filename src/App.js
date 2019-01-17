import React, { Component, Fragment } from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {TestForm} from './components/form/form';
import {SubmitButtons} from './components/submit-buttons/submit-buttons';

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: 'insertion-point-jss'
});

export default class App extends Component {
  state = {
      isSubmitting: false
  };

  form = React.createRef();

  changeIsSubmitting = isSubmitting => {
      this.setState({isSubmitting});
  };

  onSubmitClick = value => {
    this.form.current.handleSubmit(value);
  };

  onSubmitWithoutValidation = () => {
      this.changeIsSubmitting(true);
      new Promise(resolve => {
          setTimeout(resolve, 2000);
      }).then(() => {
          console.log(this.form.current.state.values);
          this.changeIsSubmitting(false);
      });
  };

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
          <Fragment>

            <SubmitButtons
              isSubmitting={this.state.isSubmitting}
              onClick={this.onSubmitClick}
              onSubmitWithoutValidation={this.onSubmitWithoutValidation}
            />
            <TestForm ref={this.form} changeIsSubmitting={this.changeIsSubmitting} />

          </Fragment>
      </JssProvider>
    );
  }
}
