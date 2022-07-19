import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostView from '../../component/organisms/Contents/PostView';
import Footer from '../../component/organisms/Footer';
import Header from '../../component/organisms/Header';
import { ContentWrap } from '../style';

const PostDetail = () => {
  console.log('PostDetail');
  const { no } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${no}`).then((res) => {
      setPost(res.data);
    });
  }, [no]);
  return (
    <>
      <Header />
      <ContentWrap>
        <PostView no={no} post={post} />
      </ContentWrap>
      <Footer />
    </>
  );
};

export default PostDetail;
