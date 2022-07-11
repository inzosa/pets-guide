import { useState } from 'react';
import LoginForm from '../../component/organisms/LoginForm';
import { LoginWrap } from './style';
import login_bg from '../../assets/images/login_bg.jpg';
import axios from 'axios';

const Login = () => {
  console.log('Login rendering');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginBtn = (e) => {
    e.preventDefault();
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      const user = res.data.find((user) => user.username === username);
      console.log(user);
    });
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
