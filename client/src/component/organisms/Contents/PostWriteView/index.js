import Editor from '../../../../libs/Editor';
import { PostContainer, PostContent, PostTitle } from '../PostView/style';
import { TitleInput } from './style';

const PostWriteView = ({ inputHandle, post, setPost }) => {
  return (
    <PostContainer>
      <PostTitle>
        <TitleInput placeholder="제목을 입력해 주세요." onChange={inputHandle} id="title" />
      </PostTitle>
      <PostContent>
        <Editor post={post} setPost={setPost} />
      </PostContent>
    </PostContainer>
  );
};

export default PostWriteView;
