import { authLogin, authLogout } from '../../libs/auth';

const LOGIN = 'user/LOGIN';
const LOGIN_FAIL = 'user/LOGIN_FAIL';
const LOGOUT = 'user/LOGOUT';

export const login = (user) => async (dispatch) => {
  try {
    const response = await authLogin(user.username, user.password);
    dispatch({ type: LOGIN, payload: response.user });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  authLogout();
  dispatch({ type: LOGOUT });
};

const initialState = {
  user: null,
  isLogin: !!localStorage.getItem('token'),
  msg: '',
  token: localStorage.getItem('token'),
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        msg: '',
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        msg: '아이디 또는 비밀번호가 일치하지않습니다.',
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isLogin: false,
        msg: '',
      };
    default:
      return {
        ...state,
      };
  }
}
