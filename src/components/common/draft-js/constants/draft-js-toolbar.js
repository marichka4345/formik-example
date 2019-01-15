import React from 'react';
import * as TEXT_STYLE from './text-styles';
import { InsertLink, FormatBold, FormatItalic } from '@material-ui/icons';

export const TOOLBAR_ICONS = {
    [TEXT_STYLE.BOLD]: <FormatBold />,
    [TEXT_STYLE.ITALIC]: <FormatItalic />,
    [TEXT_STYLE.LINK]: <InsertLink />
};
