import { memo } from 'react';
import { Logo } from '../../atoms/Logo';
import { Navbar } from '../../molecules/Navbar';
import { Container } from './style';

const navList = { navListName: ['Home', 'Pets', 'Posts'], navListAddress: ['/', '/pets', '/posts'] };

const Header = () => {
  console.log('Header rendering');
  return (
    <Container>
      <Logo />
      <Navbar navList={navList} />
    </Container>
  );
};

export default memo(Header);
