import { Link } from '../../../atoms/Link';
import { StyledTable, StyledTbody, StyledTd, StyledThead, StyledTr } from './style';
import dayjs from 'dayjs';

const PostList = ({ posts, limit, offset }) => {
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성날짜</th>
        </tr>
      </StyledThead>
      <StyledTbody>
        {posts.slice(offset, offset + limit).map((post) => (
          <StyledTr key={post._id}>
            <StyledTd>{post.seq}</StyledTd>
            <StyledTd>
              <Link linkName={post.title} linkAddress={post.seq} />
            </StyledTd>
            <StyledTd>{post.writer.username}</StyledTd>
            <StyledTd>{dayjs(post.createdAt).format('YYYY-MM-DD')}</StyledTd>
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default PostList;
