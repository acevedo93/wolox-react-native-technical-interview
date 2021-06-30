import React, {createContext, useReducer} from 'react';
import {authReducer, AuthState} from './authReducer';
import {booksApi} from '../../api/api';
import {User} from '../../interfaces/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';

interface AuthContextProps extends AuthState {
  logIn: (userData: User) => Promise<any>;
  logOut: () => void;
  clearErrorMsg: () => void;
}

const authInitialState: AuthState = {
  status: 'loading',
  user: null,
  errorMsg: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    const user = await AsyncStorage.getItem('user');
    if (!user) {
      return dispatch({type: 'LOG_OUT'});
    }
    dispatch({type: 'LOG_IN', payload: {user: JSON.parse(user)}});
  };

  const logIn = async (userData: User) => {
    dispatch({type: 'LOADING'});
    setTimeout(async () => {
      try {
        const {data} = await booksApi.post<User>('/sign_in', {...userData});
        dispatch({type: 'LOG_IN', payload: {user: data}});
        await AsyncStorage.setItem('user', JSON.stringify(data));
      } catch (err) {
        dispatch({type: 'ERROR', payload: 'Ocurrio un error inesperado'});
      }
    }, 2000);
  };

  const logOut = async () => {
    console.log('entro');
    await AsyncStorage.removeItem('user');
    return dispatch({type: 'LOG_OUT'});
  };

  const clearErrorMsg = () => dispatch({type: 'CLEAR_ERROR_MESSAGE'});

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logIn,
        logOut,
        clearErrorMsg,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
