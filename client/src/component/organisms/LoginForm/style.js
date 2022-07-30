import styled from 'styled-components';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Link } from '../../atoms/Link';

export const Form = styled.form`
  min-width: 20vw;
  min-height: 40vh;
  border: 1px solid #d9d9d9;
  box-shadow: 4px 4px 10px 3px #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  background-color: white;
  position: relative;
`;

export const StyeldText = styled(Text)`
  display: block;
  font-size: 30px;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  margin-bottom: 55px;
`;

export const LabelInputWrap = styled.div`
  margin: 30px 0;
  text-align: right;
  padding-right: 60px;
`;

export const StyledWrap = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #f2e0c9;
`;

export const StyledBtn = styled(Button)`
  font-weight: 600;
  font-size: 18px;
  border: 0;
  border-radius: 10px;
  background-color: ${(props) => (props.disabled ? 'lightgrey' : '#f4a654')};
  box-shadow: 1px 1px 1px 1px grey;
  padding: 13px;
  color: black;
`;

export const ErrorText = styled.div`
  color: red;
  padding-bottom: 20px;
  margin-top: -20px;
`;

export const JoinLink = styled(Link)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 20px;
  color: #348ac7;
`;
