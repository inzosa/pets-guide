import Editor from '../../../../libs/Editor';
import { PostContainer, PostContent, PostTitle } from '../PostView/style';
import { TitleInput } from '../PostWriteView/style';

const PostModifyView = ({ inputHandle, post, setPost }) => {
  return (
    <PostContainer>
      <PostTitle>
        <TitleInput placeholder="제목을 입력해 주세요." onChange={inputHandle} id="title" defaultValue={post.title} />
      </PostTitle>
      <PostContent>
        <Editor post={post} setPost={setPost} preContent={post.content} />
      </PostContent>
    </PostContainer>
  );
};

export default PostModifyView;
