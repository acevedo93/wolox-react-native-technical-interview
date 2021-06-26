import {useForm} from 'react-hook-form';
import {useContext, useEffect} from 'react';
import {User} from '../interfaces/user';
import {AuthContext} from '../context/auth/AuthContext';
import {Alert} from 'react-native';

export const useLogin = () => {
  const {logIn, errorMsg, clearErrorMsg} = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<User>({
    mode: 'onChange',
  });
  useEffect(() => {
    if (!errorMsg.length) return;
    Alert.alert('Login error', errorMsg, [
      {
        text: 'OK',
        onPress: clearErrorMsg,
      },
    ]);
  }, [errorMsg]);

  const onSubmit = (data: User) => {
    logIn({
      ...data,
    });
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isValid,
  };
};
