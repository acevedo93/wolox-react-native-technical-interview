import {User} from '../../interfaces/user';
export interface AuthState {
  status: 'loading' | 'authSuccess' | 'authError' | 'noAuth';
  errorMsg: string;
  user: User | null;
}

type AuthAction =
  | {type: 'LOG_IN'; payload: {user: User}}
  | {type: 'ERROR'; payload: string}
  | {type: 'LOG_OUT'};

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

    default:
      return state;
  }
};
