import React from 'react';
import {ErrorMessage} from 'formik';

export const shouldDisplayError = (errors, touched, name) => {
    return !!(errors[name] && touched[name]);
};

export const renderError = name => {
    return (
      <ErrorMessage name={name}>
          {errorMsg => <div className="control-error">{errorMsg}</div>}
      </ErrorMessage>
    );
};

export const setFieldError = (form, fieldName, errorMsg) => {
    form.setFieldError(fieldName, errorMsg);
    form.setFieldTouched(fieldName, true, false);
};
