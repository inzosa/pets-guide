import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditorRead = ({ content }) => {
  return (
    <CKEditor
      disabled
      editor={ClassicEditor}
      data={content}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        editor.editing.view.change((writer) => {
          writer.setStyle('height', '500px', editor.editing.view.document.getRoot());
          // you can add style here whatever you want for example:
          writer.setStyle('z-index', '999999 !important', editor.editing.view.document.getRoot());
        });
      }}
    />
  );
};

export default EditorRead;
