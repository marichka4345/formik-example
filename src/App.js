import React, { Component } from 'react';
import {TestForm} from './components/form/form';
import {SubmitButtons} from './components/submit-buttons/submit-buttons';
import './App.css';

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
      <div className="App">
        <SubmitButtons
          isSubmitting={this.state.isSubmitting}
          onClick={this.onSubmitClick}
          onSubmitWithoutValidation={this.onSubmitWithoutValidation}
        />
        <TestForm ref={this.form} changeIsSubmitting={this.changeIsSubmitting} />
      </div>
    );
  }
}
