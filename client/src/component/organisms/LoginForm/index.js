import { LabelInput } from '../../molecules/LabelInput';
import { ErrorText, Form, JoinLink, LabelInputWrap, StyeldText, StyledBtn, StyledWrap } from './style';
import { useSelector } from 'react-redux';
const LoginForm = ({ loginBtn, handleUsername, handlePwd, username, password }) => {
  const user = useSelector((state) => state.user);
  return (
    <Form>
      <StyeldText>로그인</StyeldText>
      <StyledWrap>
        <LabelInputWrap>
          <LabelInput htmlFor="username" id="username" label="아이디" onChange={handleUsername} />
        </LabelInputWrap>
        <LabelInputWrap>
          <LabelInput htmlFor="password" id="password" label="비밀번호" onChange={handlePwd} type="password" />
        </LabelInputWrap>
      </StyledWrap>
      <ErrorText>{!user.isLogin && user.msg}</ErrorText>
      <StyledBtn onClick={(e) => loginBtn(e)} disabled={username && password ? false : true}>
        로그인
      </StyledBtn>
      <JoinLink linkName={'회원가입'} linkAddress={'/join'} />
    </Form>
  );
};

export default LoginForm;
