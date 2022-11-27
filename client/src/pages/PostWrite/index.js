import axios from 'axios';
import { useState } from 'react';
import PostWriteView from '../../component/organisms/Contents/PostWriteView';
import Footer from '../../component/organisms/Footer';
import Header from '../../component/organisms/Header';
import { ContentWrap } from '../style';
import { SaveBtn } from './style';
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {
  console.log('PostWrite');
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });

  const inputHandle = (e) => {
    const { id, value } = e.target;
    setPost({ ...post, [id]: value });
  };

  const postSave = () => {
    axios
      .post(
        'http://localhost:5000/posts',
        { post },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      )
      .then((res) => navigate('/posts'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <ContentWrap>
        <PostWriteView inputHandle={inputHandle} post={post} setPost={setPost} />
        <SaveBtn onClick={postSave}>등록</SaveBtn>
      </ContentWrap>
      <Footer />
    </>
  );
};

export default PostWrite;
