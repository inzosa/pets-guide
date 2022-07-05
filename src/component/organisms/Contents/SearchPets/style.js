import styled from 'styled-components';
import { Navbar } from '../../../molecules/Navbar';

export const SearchBarContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  width: 65%;
  margin: 20px auto;
  background-color: white;
`;

export const SearchNavbar = styled(Navbar)`
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
