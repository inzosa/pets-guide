import { useState } from 'react';
import LoginForm from '../../component/organisms/LoginForm';
import { LoginWrap } from './style';
import login_bg from '../../assets/images/login_bg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../modules/user';

const Login = () => {
  console.log('Login rendering');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginBtn = async (e) => {
    e.preventDefault();
    const users = await axios.get('/db/users.json').then((res) => res.data.users);
    const user = users.find((user) => user.username === username && user.password === password);
    dispatch(login(user));
    navigate('/');
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
