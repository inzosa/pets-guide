import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../component/organisms/Footer';
import Header from '../../component/organisms/Header';
import { StyledWrap, UpdateBtn } from '../PostDetail/style';
import PostModifyView from '../../component/organisms/Contents/PostModifyView';
import { ContentWrap } from '../style';
import { useNavigate } from 'react-router-dom';

const PostModify = () => {
  console.log('PostModify');
  const navigate = useNavigate();
  const { no } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${no}`).then((res) => {
      setPost(res.data);
    });
  }, [no]);

  const inputHandle = (e) => {
    const { id, value } = e.target;
    setPost({ ...post, [id]: value });
  };

  // 수정 버튼
  const modifyMoveBtn = () => {
    axios
      .put(`http://localhost:5000/posts/${no}`, post, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => navigate('/posts'));
  };

  return (
    <>
      <Header />
      <ContentWrap>
        <PostModifyView post={post} setPost={setPost} inputHandle={inputHandle} />
        <StyledWrap>
          <UpdateBtn onClick={modifyMoveBtn}>수정</UpdateBtn>
        </StyledWrap>
      </ContentWrap>
      <Footer />
    </>
  );
};

export default PostModify;
