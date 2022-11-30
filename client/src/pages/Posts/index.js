import PostList from '../../component/organisms/Contents/PostList';
import Header from '../../component/organisms/Header';
import Footer from '../../component/organisms/Footer';
import { SearchBar } from '../../component/molecules/SearchBar';
import { useEffect, useState } from 'react';
import { Pagination } from '../../component/molecules/Pagination';
import { PaginationContainer, PostContainer, WriteBtn } from './style';
import { ContentWrap } from '../style';
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(() => {
    // localStorge에 값이 없다면 1 값이 있다면 불러온다.
    if (!localStorage.getItem('currentPage')) {
      return 1;
    } else {
      return parseInt(localStorage.getItem('currentPage'));
    }
  });

  const limit = 20;
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get('http://localhost:5000/posts').then((res) => {
      setPosts(res.data);
    });
  }, []);

  const searchInput = (e) => {
    setSearch(e.target.value);
  };

  const searchBtn = () => {
    axios.get('http://localhost:5000/posts').then((res) => {
      const newPost = res.data.filter((post) => post.title.indexOf(search) !== -1);
      setPosts(newPost);
    });
  };

  const writeMoveBtn = () => {
    axios
      .post(
        'http://localhost:5000/auth/access',
        {},
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      )
      .then(() => navigate('/postsWrite'))
      .catch((err) => alert(err.response.data));
  };
  return (
    <>
      <Header />
      <ContentWrap>
        <PostContainer>
          <WriteBtn onClick={writeMoveBtn}>
            <FaPencilAlt />
          </WriteBtn>

          <PostList posts={posts} limit={limit} offset={offset} />
          <PaginationContainer>
            <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
            <SearchBar handleSearch={searchInput} searchBtn={searchBtn} />
          </PaginationContainer>
        </PostContainer>
      </ContentWrap>
      <Footer />
    </>
  );
};

export default Post;
