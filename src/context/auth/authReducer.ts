import {User} from '../../interfaces/user';
export interface AuthState {
  status: 'loading' | 'authSuccess' | 'authError' | 'noAuth';
  errorMsg: string;
  user: User | null;
}

type AuthAction =
  | {type: 'LOADING'}
  | {type: 'LOG_IN'; payload: {user: User}}
  | {type: 'ERROR'; payload: string}
  | {type: 'LOG_OUT'}
  | {type: 'CLEAR_ERROR_MESSAGE'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'ERROR':
      return {
        errorMsg: action.payload,
        status: 'authError',
        user: null,
      };
    case 'LOADING':
      return {
        ...state,
        status: 'loading',
        errorMsg: '',
      };

    case 'LOG_IN':
      return {
        ...state,
        errorMsg: '',
        status: 'authSuccess',
        user: action.payload.user,
      };
    case 'LOG_OUT':
      return {
        ...state,
        errorMsg: '',
        status: 'noAuth',
        user: null,
      };
    case 'CLEAR_ERROR_MESSAGE':
      return {
        ...state,
        errorMsg: '',
      };

    default:
      return state;
  }
};
