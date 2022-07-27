import { useState } from 'react';
import join_bg from '../../assets/images/join_bg.jpg';
import { JoinWrap } from './style';
import JoinForm from '../../component/organisms/JoinForm';
import { authJoin } from '../../libs/auth';

const Join = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const joinBtn = (e) => {
    e.preventDefault();
    authJoin(username, password);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePwd = (e) => {
    setPassword(e.target.value);
  };

  return (
    <JoinWrap style={{ backgroundImage: `url(${join_bg})` }}>
      <JoinForm joinBtn={joinBtn} handleUsername={(e) => handleUsername(e)} handlePwd={(e) => handlePwd(e)} username={username} password={password} />
    </JoinWrap>
  );
};

export default Join;
