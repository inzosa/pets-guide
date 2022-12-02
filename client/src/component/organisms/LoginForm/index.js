import { LabelInput } from '../../molecules/LabelInput';
import { ErrorText, Form, JoinLink, LabelInputWrap, StyeldText, StyledBtn, StyledWrap, TestDiv } from './style';
import { useSelector } from 'react-redux';
import GoogleLogIn from '../../../libs/googleLogin';

const LoginForm = ({ loginBtn, handleUsername, handlePwd, username, password }) => {
  const user = useSelector((state) => state.user);
  return (
    <TestDiv>
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
      <GoogleLogIn />
    </TestDiv>
  );
};

export default LoginForm;
