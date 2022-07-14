import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Logo } from '../../atoms/Logo';
import { Navbar } from '../../molecules/Navbar';
import { Container, LoginLinkWrap, LoginLink, LogoutLink } from './style';
import { useDispatch } from 'react-redux';
import { logout } from '../../../modules/user';

const navList = { navListName: ['Home', 'Pets', 'Posts'], navListAddress: ['/', '/pets', '/posts'] };

const Header = () => {
  console.log('Header rendering');
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <Logo />
      <Navbar navList={navList} />
      <LoginLinkWrap>{user ? <LogoutLink onClick={() => dispatch(logout())}>로그아웃</LogoutLink> : <LoginLink linkName="로그인" linkAddress="login" />}</LoginLinkWrap>
    </Container>
  );
};

export default memo(Header);
