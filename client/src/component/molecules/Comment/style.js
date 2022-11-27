import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

// Common
export const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 1000px;
  border: 1px solid lightgrey;
  border-radius: 15px;
`;

export const CommentWriter = styled(Text)``;

// Comment View List
export const CommentViewWrap = styled.div`
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

export const CommentViewContent = styled(Text)`
  display: block;
  padding: 10px 0;
`;

export const CommentViewDate = styled(Text)`
  font-size: 14px;
  color: grey;
`;

// Comment Write
export const CommentWriteWrap = styled.div`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid lightgrey;
  border-radius: 15px;
`;

export const CommentTextArea = styled.textarea`
  padding: 10px;
  outline: none;
  resize: none;
  width: 99%;
  height: auto;
  border: 0;
`;

export const WriteBtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;

export const CommentWriteBtn = styled(Button)`
  background-color: #ccccb2;
  font-weight: bold;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 7px;
`;
