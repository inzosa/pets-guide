import { CommentTextArea, CommentViewContent, CommentViewDate, CommentViewWrap, CommentWriteBtn, CommentWriter, CommentWriteWrap, Container, WriteBtnWrap } from './style';
import dayjs from 'dayjs';

export const Comment = ({ commentBtn, user, inputHandle, comments }) => {
  return (
    <Container>
      {comments?.map((comment) => (
        <CommentViewWrap key={comment._id}>
          <CommentWriter>{comment.user.username}</CommentWriter>
          <CommentViewContent>{comment.content}</CommentViewContent>
          <CommentViewDate>{dayjs(comment.createdAt).format('YYYY-MM-DD')}</CommentViewDate>
        </CommentViewWrap>
      ))}

      <CommentWriteWrap>
        <CommentWriter>{user.user?.username}</CommentWriter>
        <CommentTextArea placeholder="댓글을 남겨보세요" rows="1" onChange={inputHandle} id="comment"></CommentTextArea>
        <WriteBtnWrap>
          <CommentWriteBtn onClick={commentBtn}>등록</CommentWriteBtn>
        </WriteBtnWrap>
      </CommentWriteWrap>
    </Container>
  );
};
