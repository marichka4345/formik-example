import React, { Component, Fragment } from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {TestForm} from './components/form/form';
import {SubmitButtons} from './components/submit-buttons/submit-buttons';
import {getServerError, sleep} from './services/helpers';
import {setFieldError} from './services/errors';
import {AUTOCOMPLETE1, TEXT1} from './constants/form-fields';

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

  onSubmit = value => {
    this.form.current.handleSubmit(value);
  };

  onSubmitWithoutValidation = async () => {
      this.changeIsSubmitting(true);

      await sleep(1000);

      window.alert('Submitted');
      console.log(this.form.current.state.values);

      this.changeIsSubmitting(false);
  };

  onSubmitWithError = async () => {
      this.changeIsSubmitting(true);
      const errors = await getServerError([TEXT1, AUTOCOMPLETE1]);

      Object.entries(errors).forEach(([name, error]) => {
          setFieldError(this.form.current, name, error);
      });
      this.changeIsSubmitting(false);
  };

  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
          <Fragment>

            <SubmitButtons
              isSubmitting={this.state.isSubmitting}
              onSubmit={this.onSubmit}
              onSubmitWithoutValidation={this.onSubmitWithoutValidation}
              onSubmitWithError={this.onSubmitWithError}
            />
            <TestForm ref={this.form} changeIsSubmitting={this.changeIsSubmitting} />

          </Fragment>
      </JssProvider>
    );
  }
}
