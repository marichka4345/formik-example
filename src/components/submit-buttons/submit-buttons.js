import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';

export const SubmitButtons = ({onClick, isSubmitting, onSubmitWithoutValidation}) => {
    return (
        <Fragment>
            <Button
              color="primary"
              onClick={onClick}
              disabled={isSubmitting}
            >
                Save with validation
            </Button>
            <Button
              color="primary"
              onClick={onSubmitWithoutValidation}
              disabled={isSubmitting}
            >
                Save without validation
            </Button>
            <Button
              color="primary"
              onClick={onSubmitWithoutValidation}
              disabled={isSubmitting}
            >
                Save with server error
            </Button>
        </Fragment>
    );
};
