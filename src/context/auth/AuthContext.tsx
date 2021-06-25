import React, {createContext, useReducer} from 'react';
import {User} from '../../interfaces/user';
import {authReducer, AuthState} from './authReducer';

interface AuthContextProps {
  logIn: () => void;
  logOut: () => void;
  errorMsg: string;
  user: User | null;
  status: 'loading' | 'authSuccess' | 'authError' | 'noAuth';
}

const authInitialState: AuthState = {
  status: 'loading',
  user: null,
  errorMsg: '',
};

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  const logIn = () => {
    //dispatch({type:'LOG_IN', payload:{user}})
  };
  const logOut = () => {};
  return (
    <AuthContext.Provider
      value={{
        ...state,
        logIn,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
