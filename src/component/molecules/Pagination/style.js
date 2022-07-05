import styled from 'styled-components';
import { Button } from '../../atoms/Button';

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageNum = styled(Button)`
  padding: 5px 10px;
  margin: 3px;
  background-color: #010000;
  color: white;
  border-radius: 5px;
  color: ${(props) => props.color};
`;

export const PrevButton = styled(Button)`
  all: unset;
  cursor: pointer;
  line-height: 10px;
`;

export const NextButton = styled(Button)`
  all: unset;
  cursor: pointer;
  line-height: 10px;
`;
