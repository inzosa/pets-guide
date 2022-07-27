import { useEffect, useState } from 'react';
import LoginForm from '../../component/organisms/LoginForm';
import { LoginWrap } from './style';
import login_bg from '../../assets/images/login_bg.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../modules/user';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const loginBtn = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePwd = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginWrap style={{ backgroundImage: `url(${login_bg})` }}>
      <LoginForm loginBtn={loginBtn} handleUsername={(e) => handleUsername(e)} handlePwd={(e) => handlePwd(e)} username={username} password={password} />
    </LoginWrap>
  );
};

export default Login;
