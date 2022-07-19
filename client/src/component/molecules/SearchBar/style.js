import styled from 'styled-components';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Text } from '../../atoms/Text';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #d9d9d9;
  margin: 0 20px;
`;

export const AreaBox = styled.div`
  display: flex;
`;

export const SearchBarText = styled(Text)``;

export const SearchBarInput = styled(Input)`
  border-radius: 10px;
  height: 20px;
  margin-right: 5px;
  padding: 5px;
`;

export const SearchBarBtn = styled(Button)`
  border: 0;
  padding: 0 13px;
  border-radius: 10px;
  background-color: #82c8a0;
  box-shadow: 1px 1px 1px 1px grey;
`;

export const StyledFaSearch = styled(FaSearch)`
  vertical-align: middle;
`;
