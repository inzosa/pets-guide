import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';
import { Button } from '../component/atoms/Button';
import { useDispatch } from 'react-redux';
import { oauth_login } from '../modules/user';

const GoogleLoginBtn = styled(Button)`
  display: flex;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 15px;
  padding: 10px;
  margin-top: 10px;
`;

const GoogleLogIn = () => {
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
      dispatch(oauth_login(response));
    },
  });

  return (
    <GoogleLoginBtn onClick={() => login()}>
      <FcGoogle size={20} />
      구글로 로그인 하기
    </GoogleLoginBtn>
  );
};

export default GoogleLogIn;
