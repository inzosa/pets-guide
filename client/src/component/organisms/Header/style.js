import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { Link } from '../../atoms/Link';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
  background-color: #ffe6e6;
`;

export const LoginLinkWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 50px;
  background-color: #c4e0e5;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #d9d9d9;
`;

export const LoginLink = styled(Link)`
  display: inline-block;
  padding: 10px;

  &:hover {
    color: black;
  }
`;

export const LogoutLink = styled(Button)`
  all: unset;
  padding: 10px;
  background-color: #ef473a;
  border-radius: 5px;
  cursor: pointer;
`;
