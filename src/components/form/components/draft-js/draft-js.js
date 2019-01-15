import React from 'react';
import {Field} from 'formik';
import DraftJsEditor from '../../../common/draft-js/draft-js';

export const DraftJs = ({name}) => {
    const renderDraftJs = ({field: {name, value}, form: {setFieldValue}}) => {
        const controlProps = {
            name,
            value,
            setFieldValue
        };

        return (
          <DraftJsEditor {...controlProps} />
        );
    };

    return (
      <Field name={name}>
          {renderDraftJs}
      </Field>
    );
};

