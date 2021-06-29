import {useForm} from 'react-hook-form';
import {useContext, useEffect} from 'react';
import {User} from '../interfaces/user';
import {AuthContext} from '../context/auth/AuthContext';
import Snackbar from 'react-native-snackbar';
import {colors} from '../styles/colors';
import {FONT_FAMILY} from '../styles/GlobalStyles';

export const useLogin = () => {
  const {logIn, errorMsg, status} = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<User>({
    mode: 'onChange',
  });
  useEffect(() => {
    if (!errorMsg.length) return;

    Snackbar.show({
      text: errorMsg,
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'ok',
        textColor: colors.secondary,
      },
      fontFamily: FONT_FAMILY,
    });
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
    status,
    errorMsg,
  };
};
