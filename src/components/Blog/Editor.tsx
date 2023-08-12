import { EditorState, ContentState } from 'draft-js';
import dynamic from 'next/dynamic';
import React, { Component, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';

interface ICustomEditor {
  value?: string;
  onChange?: (value: string) => void;
}

const CustomEditor = ({ onChange, value }: ICustomEditor) => {

  const [editorState, setEditorState] = useState(() => {
    if (value) {
      const blocksFromHTml = htmlToDraft(value);
      const { contentBlocks, entityMap } = blocksFromHTml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty();
  });

  const handleStateChange = (editorState: EditorState): void => {
    setEditorState(editorState);
    if (onChange) {
      onChange(editorState.getCurrentContent().getPlainText())
    }
  }
  return (
    <div className='max-w-full h-full'>
      <Editor
        wrapperClassName='w-full '
        editorClassName='border-b w-full '
        editorState={editorState}
        onEditorStateChange={handleStateChange}
      />
    </div>
  )
}

export default CustomEditor