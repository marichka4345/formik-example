import React from 'react';
import PropTypes from 'prop-types';
import {SubmitButton} from './components/submit-button/submit-button';
import styles from './submit-buttons.module.css';

export const SubmitButtons = ({
                                  onSubmit,
                                  onSubmitWithoutValidation,
                                  onSubmitWithError,
                                  isSubmitting
}) => {
    return (
      <div className={styles.root}>
          <SubmitButton
            isSubmitting={isSubmitting}
            onClick={onSubmit}
            title="Save with validation"
          />
          <SubmitButton
            isSubmitting={isSubmitting}
            onClick={onSubmitWithoutValidation}
            title="Save without validation"
          />
          <SubmitButton
            isSubmitting={isSubmitting}
            onClick={onSubmitWithError}
            title="Save with server error"
          />
      </div>
    );
};

SubmitButtons.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSubmitWithoutValidation: PropTypes.func.isRequired,
    onSubmitWithError: PropTypes.func.isRequired
};
