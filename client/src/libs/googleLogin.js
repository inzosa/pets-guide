import { useGoogleLogin } from '@react-oauth/google';

const GoogleLogIn = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div>
      <button onClick={() => login}>구글로 로그인 하기</button>
    </div>
  );
};

export default GoogleLogIn;
