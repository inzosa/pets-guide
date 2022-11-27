import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

const Editor = ({ post, setPost, preContent = '' }) => {
  function MyUploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append('file', file);
            axios
              .post(`http://localhost:5000/posts/image_upload`, body, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then((res) => {
                console.log(res);
                resolve({ default: `http://localhost:5000/uploads/${res.data.filename}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return MyUploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      data={preContent}
      editor={ClassicEditor}
      config={{
        placeholder: '내용을 입력하세요.',
        height: '500px',
        extraPlugins: [uploadPlugin],
      }}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        editor.editing.view.change((writer) => {
          writer.setStyle('height', '530px', editor.editing.view.document.getRoot());
          // you can add style here whatever you want for example:
          writer.setStyle('z-index', '999999 !important', editor.editing.view.document.getRoot());
        });
      }}
      onChange={(event, editor) => {}}
      onBlur={(event, editor) => {
        const data = editor.getData();
        setPost({ ...post, content: data });
      }}
      onFocus={(event, editor) => {}}
    />
  );
};

export default Editor;
