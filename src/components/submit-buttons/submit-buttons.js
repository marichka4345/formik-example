import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './submit-buttons.module.css';

export const SubmitButtons = ({onClick, isSubmitting, onSubmitWithoutValidation}) => {
    return (
        <div className={styles.root}>
            <Button
              variant="contained"
              color="primary"
              onClick={onClick}
              disabled={isSubmitting}
              className={styles.button}
            >
                Save with validation
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmitWithoutValidation}
              disabled={isSubmitting}
              className={styles.button}
            >
                Save without validation
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmitWithoutValidation}
              disabled={isSubmitting}
              className={styles.button}
            >
                Save with server error
            </Button>
        </div>
    );
};
