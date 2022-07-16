import { Link } from '../../../atoms/Link';
import { StyledTable, StyledTbody, StyledTd, StyledThead, StyledTr } from './style';

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
          <StyledTr key={post.id}>
            <StyledTd>{post.id}</StyledTd>
            <StyledTd>
              <Link linkName={post.title} linkAddress={post.id} />
            </StyledTd>
            <StyledTd>{`작성자${post.id}`}</StyledTd>
            <StyledTd>2022-07-01</StyledTd>
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

export default PostList;
