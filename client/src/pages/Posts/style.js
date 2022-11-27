import styled from 'styled-components';
import { Button } from '../../component/atoms/Button';

export const PostContainer = styled.div`
  width: 100%;
`;

export const PaginationContainer = styled.div`
  width: 64%;
  margin: auto;
`;

export const WriteBtn = styled(Button)`
  display: block;
  margin: 15px auto;
  border: 1px solid lightgrey;
  box-shadow: 1px 1px 1px 1px grey;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgb(3 199 90 / 12%);
`;
