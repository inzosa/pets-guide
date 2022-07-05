import { Link } from '../../../atoms/Link';

const PostList = ({ posts, limit, offset }) => {
  return (
    <table border={1} style={{ width: '60%', margin: 'auto' }}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성날짜</th>
        </tr>
      </thead>
      <tbody>
        {posts.slice(offset, offset + limit).map((post) => (
          <tr key={post.id}>
            <td style={{ textAlign: 'center' }}>{post.id}</td>
            <td>
              <Link linkName={post.title} linkAddress={post.id} />
            </td>
            <td style={{ textAlign: 'center' }}>{`작성자${post.id}`}</td>
            <td style={{ textAlign: 'center' }}>2022-07-01</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;
