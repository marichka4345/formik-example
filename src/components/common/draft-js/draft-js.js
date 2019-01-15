import React, {Component} from 'react';
import {Editor} from 'draft-js';
import * as TEXT_STYLE from './constants/text-styles';
import {TOOLBAR_ICONS} from './constants/draft-js-toolbar';
import 'draft-js/dist/Draft.css';

const styles = {
    editor: {
        border: '1px solid gray',
        minHeight: '6em'
    },
    toolbar: {
        display: 'flex'
    }
};

export default class DraftJsEditor extends Component {
    setEditor = editor => {
        this.editor = editor;
    };

    focusEditor = () => {
        if (this.editor) {
            this.editor.focus();
        }
    };

    onStyleBtnClick = e => {
        console.log(e);
    };

    renderToolbar = () => {
        const textStyles = [
            TEXT_STYLE.BOLD,
            TEXT_STYLE.ITALIC,
            TEXT_STYLE.LINK
        ];

        return (
          <div style={styles.toolbar}>
              {
                  textStyles.map(style => (
                    <button key={style} name={style} onClick={this.onStyleBtnClick}>
                        {TOOLBAR_ICONS[style]}
                    </button>
                  ))
              }
          </div>
        );
    };

    render() {
        const {name, value, setFieldValue} = this.props;

        return (
          <div style={styles.editor} onClick={this.focusEditor}>
              <Editor
                ref={this.setEditor}
                editorState={value}
                onChange={editorState => setFieldValue(name, editorState)}
              />

              {this.renderToolbar()}
          </div>
        );
    }
}
