import React from 'react';
import {Field} from 'formik';
import TextInputControl from '../../../common/text-input/text-input';

export const TextInput  = ({name, hasError}) => {
    const renderText = ({field}) => {
        const controlProps = {field, hasError};

        return <TextInputControl  {...controlProps} />
    };

    return (
      <Field
        name={name}
        render={renderText}
      />
    );
};
