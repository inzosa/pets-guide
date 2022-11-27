import styled from 'styled-components';
import { Button } from '../../component/atoms/Button';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

export const StyledWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const UpdateBtn = styled(Button)`
  margin-right: 5px;
  padding: 15px;
  border-radius: 15px;
  border: 1px solid lightgrey;
  background-color: #ffc500;
  font-weight: bold;
`;

export const DeleteBtn = styled(Button)`
  padding: 15px;
  border-radius: 15px;
  border: 1px solid lightgrey;
  background-color: #de6262;
  font-weight: bold;
`;

export const StyledUnLikeBtn = styled(FcLikePlaceholder)`
  margin-bottom: 15px;
  padding: 20px;
  font-size: 50px;
  cursor: pointer;
`;

export const StyledLikeBtn = styled(FcLike)`
  margin-bottom: 15px;
  padding: 20px;
  font-size: 50px;
  cursor: pointer;
`;
