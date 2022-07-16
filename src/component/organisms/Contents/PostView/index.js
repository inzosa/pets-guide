import { Text } from '../../../atoms/Text';
import { PostContainer, PostContent, PostDate, PostTitle, PostWriter } from './style';

const PostView = ({ post }) => {
  return (
    <PostContainer>
      <PostTitle>
        <Text>{post.title}</Text>
      </PostTitle>
      <PostWriter>
        <Text>{`작성자${post.id}`}</Text>
      </PostWriter>
      <PostDate>
        <Text>2021-07-03</Text>
      </PostDate>
      <PostContent>{post.body}</PostContent>
    </PostContainer>
  );
};

export default PostView;
