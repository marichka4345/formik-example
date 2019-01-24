import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import {RichUtils} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import IconButton from '@material-ui/core/IconButton';
import * as TEXT_STYLE from './constants/text-styles';
import {TOOLBAR_ICONS} from './constants/draft-js-toolbar';
import 'draft-js/dist/Draft.css';
import styles from './draft-js.module.css';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

export class DraftJs extends Component {
    setEditor = editor => {
        this.editor = editor;
    };

    focusEditor = () => {
        if (this.editor) {
            this.editor.focus();
        }
    };

    onChange = (editorState, setFieldValue) => {
        const {name} = this.props;

        setFieldValue(name, editorState);
    };

    onStyleBtnClick = (e, value) => {
        const style = e.currentTarget.name;
        this.onChange(RichUtils.toggleInlineStyle(value, style));
    };

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }

        return 'not-handled';
    };

    renderToolbar = value => {
        const textStyles = [
            TEXT_STYLE.BOLD,
            TEXT_STYLE.ITALIC,
            TEXT_STYLE.LINK
        ];

        return (
          <Fragment>
              {
                  textStyles.map(style => (
                    <IconButton
                      key={style} name={style}
                      onClick={e => this.onStyleBtnClick(e, value)}
                      onMouseDown={e => e.preventDefault()}
                    >
                        {TOOLBAR_ICONS[style]}
                    </IconButton>
                  ))
              }
          </Fragment>
        );
    };

    renderEditor = ({field: {name, value}, form: {setFieldValue}}) => {
        const {hasError} = this.props;

        const errorClass = hasError ? styles.error : '';

        return (
          <div
            className={`${styles.editor} ${errorClass}`}
            onClick={this.focusEditor}
          >
              <Editor
                ref={this.setEditor}
                editorState={value}
                onChange={editorState => this.onChange(editorState, setFieldValue)}
                handleKeyCommand={this.handleKeyCommand}
                plugins={[inlineToolbarPlugin]}
              />

              <InlineToolbar>
                  {() => this.renderToolbar(value)}
              </InlineToolbar>
          </div>
        );
    };

    render() {
        const {name} = this.props;

        return (
          <Field
            name={name}
            render={this.renderEditor}
          />
        );
    }
}

DraftJs.propTypes = {
    name: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired
};

