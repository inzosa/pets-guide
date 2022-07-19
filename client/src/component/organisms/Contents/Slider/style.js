import styled from 'styled-components';
import { Button } from '../../../atoms/Button';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 255px;
  z-index: 1;
`;

export const ButtonWrap = styled.div`
  z-index: 2;
  position: absolute;
  top: 45%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PrevButton = styled(Button)`
  background-color: black;
  color: #d9d9d9;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
export const NextButton = styled(Button)`
  background-color: black;
  color: #d9d9d9;
  padding: 10px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
