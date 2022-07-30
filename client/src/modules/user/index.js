import { authLogin, authLogout } from '../../libs/auth';

const LOGIN = 'user/LOGIN';
const LOGIN_FAIL = 'user/LOGIN_FAIL';
const LOGOUT = 'user/LOGOUT';
const LOAD_USER = 'user/LOAD_USER';

export const login = (user) => async (dispatch) => {
  try {
    const response = await authLogin(user.username, user.password);
    localStorage.setItem('token', response.user.accessToken);
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

export const loadUser = () => ({ type: LOAD_USER });

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
      };
    case LOGIN_FAIL:
      return {
        ...state,
        msg: '아이디 또는 비밀번호가 일치하지않습니다.',
      };
    case LOGOUT:
      return {
        ...state,
        user: action.payload,
        isLogin: false,
        token: localStorage.clear(),
      };
    case LOAD_USER:
      return {
        ...state,
        isLogin: !!localStorage.getItem('token'),
        token: localStorage.getItem('token'),
      };
    default:
      return {
        ...state,
      };
  }
}
