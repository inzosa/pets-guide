import axios from 'axios';

const LOGIN = 'user/LOGIN';
const LOGIN_FAIL = 'user/LOGIN_FAIL';
const LOGOUT = 'user/LOGOUT';

export const login = (user) => async (dispatch) => {
  const response = await axios.get('/db/users.json').then((res) => res.data.users.find((data) => data.username === user.username && data.password === user.password));
  if (!response) {
    dispatch({
      type: LOGIN_FAIL,
    });
  } else {
    dispatch({
      type: LOGIN,
      payload: response,
    });
  }
};
export const logout = () => ({ type: LOGOUT });

const initialState = {
  user: null,
  isLogin: false,
  msg: '',
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
