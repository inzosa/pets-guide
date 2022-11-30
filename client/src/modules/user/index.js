import axios from 'axios';

const LOGIN = 'user/LOGIN';

const LOGIN_FAIL = 'user/LOGIN_FAIL';
const LOGOUT = 'user/LOGOUT';
const LOAD_USER = 'user/LOAD_USER';

export const login = (user) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', { username: user.username, password: user.password }, { credentials: 'include' });
    localStorage.setItem('token', response.data.access_token);
    dispatch({ type: LOGIN, payload: response.data.user });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOGIN_FAIL, payload: err.response.data });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const loadUser = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/auth/loadUser', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    dispatch({ type: LOAD_USER, payload: response.data.user });
  } catch (err) {
    console.log(err);
  }
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
      };
    case LOGIN_FAIL:
      return {
        ...state,
        msg: action.payload,
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
        user: action.payload,
        isLogin: !!localStorage.getItem('token'),
        token: localStorage.getItem('token'),
      };
    default:
      return {
        ...state,
      };
  }
}
