import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.jpg';
import { Image } from '../Image';

const LogoContainer = styled.div`
  width: 100px;
  height: 80px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  overflow: hidden;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <Image alt="logo" src={logo} />
      </Link>
    </LogoContainer>
  );
};
