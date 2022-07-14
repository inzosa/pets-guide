const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export const login = (user) => ({ type: LOGIN, user });
export const logout = () => ({ type: LOGOUT });

const initialState = {
  user: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, user: action.user };
    }
    case LOGOUT: {
      return { ...state, user: null };
    }
    default:
      return state;
  }
}
