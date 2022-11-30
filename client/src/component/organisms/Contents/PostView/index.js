import EditorRead from '../../../../libs/EditorRead';
import { Text } from '../../../atoms/Text';
import { PostContainer, PostDate, PostTitle, PostWriter } from './style';
import dayjs from 'dayjs';

const PostView = ({ post }) => {
  const writer = post.writer || {};
  return (
    <PostContainer>
      <PostTitle>
        <Text>{post.title}</Text>
      </PostTitle>
      <PostWriter>
        <Text>{writer.username}</Text>
      </PostWriter>
      <PostDate>
        <Text>{dayjs(post.createdAt).format('YYYY-MM-DD')}</Text>
      </PostDate>
      <EditorRead content={post.content} />
    </PostContainer>
  );
};

export default PostView;
