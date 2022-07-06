import PostList from '../../component/organisms/Contents/PostList';
import Header from '../../component/organisms/Header';
import Footer from '../../component/organisms/Footer';
import { SearchBar } from '../../component/molecules/SearchBar';
import { useEffect, useState } from 'react';
import { Pagination } from '../../component/molecules/Pagination';
import { PaginationContainer, PostContainer } from './style';
import { ContentWrap } from '../style';
import axios from 'axios';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState([]);
  const [search, setSearch] = useState('');

  const limit = 20;
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setPosts(res.data));
  }, []);

  const searchInput = (e) => {
    setSearch(e.target.value);
  };

  const searchBtn = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      const newPost = res.data.filter((post) => post.title.indexOf(search) !== -1);
      setPosts(newPost);
    });
  };

  return (
    <>
      <Header />
      <ContentWrap>
        <PostContainer>
          <PostList posts={posts} limit={limit} offset={offset} />
          <PaginationContainer>
            <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} tab={tab} setTab={setTab} />
            <SearchBar handleSearch={searchInput} searchBtn={searchBtn} />
          </PaginationContainer>
        </PostContainer>
      </ContentWrap>
      <Footer />
    </>
  );
};

export default Post;
