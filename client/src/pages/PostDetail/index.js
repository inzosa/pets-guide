import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostView from '../../component/organisms/Contents/PostView';
import Footer from '../../component/organisms/Footer';
import Header from '../../component/organisms/Header';
import { ContentWrap } from '../style';
import { DeleteBtn, StyledLikeBtn, StyledUnLikeBtn, StyledWrap, UpdateBtn } from './style';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Comment } from '../../component/molecules/Comment';

const PostDetail = () => {
  console.log('PostDetail');
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { no } = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState('');
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${no}`).then((res) => {
      setPost(res.data);
    });
    // 좋아요 확인
    axios
      .post(
        `http://localhost:5000/like/${no}/active`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      )
      .then((res) => setLike(res.data));
  }, [no]);

  // 수정화면가는 버튼
  const modifyMoveBtn = () => {
    navigate(`/postsModify/${no}`);
  };

  // 삭제 버튼
  const postDelete = () => {
    axios
      .delete(`http://localhost:5000/posts/${no}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        navigate('/posts');
      })
      .catch((err) => console.log(err));
  };

  // 좋아요 버튼
  const likeBtn = () => {
    if (user.token) {
      axios
        .post(
          `http://localhost:5000/like/${no}`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          }
        )
        .then(() => {
          setLike(!like);
        })
        .catch((err) => console.log(err));
    } else {
      alert('회원만 가능합니다.');
    }
  };

  // 댓글 내용
  const inputHandle = (e) => {
    const { value, id } = e.target;
    setComment({ ...comment, [id]: value });
  };

  // 댓글 등록 버튼
  const commentBtn = () => {
    axios
      .post(`http://localhost:5000/posts/${no}/comment`, comment, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => navigate(0))
      .catch((err) => console.log(err));
  };
  console.log(post);
  return (
    <>
      <Header />
      <ContentWrap>
        <PostView no={no} post={post} />
        <StyledWrap>
          {like ? <StyledLikeBtn onClick={likeBtn} /> : <StyledUnLikeBtn onClick={likeBtn} />}

          {/* {post.like_count} */}
        </StyledWrap>
        {post.writer?.username === user.user?.username ? (
          <StyledWrap>
            <UpdateBtn onClick={modifyMoveBtn}>수정</UpdateBtn>
            <DeleteBtn onClick={postDelete}>삭제</DeleteBtn>
          </StyledWrap>
        ) : (
          ''
        )}
      </ContentWrap>
      <Comment user={user} commentBtn={commentBtn} inputHandle={inputHandle} comments={post.comments} />
      <Footer />
    </>
  );
};

export default PostDetail;
