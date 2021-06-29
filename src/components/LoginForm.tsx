import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Logo} from './Logo';
import {Controller} from 'react-hook-form';
import {Input} from './Input';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {useLogin} from '../hooks/useLogin';
import {colors} from '../styles/colors';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LoginForm = () => {
  const {control, handleSubmit, onSubmit, isValid, status} = useLogin();
  const {t} = useLng();

  return (
    <View style={styles.formContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Controller
        control={control}
        rules={{required: true}}
        name="name"
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <Input
            underLine={true}
            label={t('loginForm.name.label')}
            placeholder={t('loginForm.name.placeholder')}
            onChange={value => onChange(value)}
            type="text"
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        rules={{required: true}}
        name="lastName"
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <Input
            underLine={true}
            label={t('loginForm.lastName.label')}
            placeholder={t('loginForm.lastName.placeholder')}
            onChange={value => onChange(value)}
            type="text"
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value: EMAIL_REGEX,
            message: t('loginForm.email.errorMsg'),
          },
        }}
        name="email"
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <Input
            underLine={true}
            label={t('loginForm.email.label')}
            placeholder={t('loginForm.email.placeholder')}
            onChange={value => onChange(value)}
            type="email"
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="date"
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <Input
            label={t('loginForm.date.label')}
            placeholder={t('loginForm.date.placeholder')}
            onChange={value => {
              onChange(value);
            }}
            type="date"
            value={value}
          />
        )}
      />

      <View style={styles.termsAndConditionsContainer}>
        <Controller
          control={control}
          name="termsAndConditions"
          rules={{
            required: true,
          }}
          defaultValue={false}
          render={({field: {onChange, value}}) => (
            <Input
              underLine={true}
              label={t('loginForm.termsAndConditions.label')}
              placeholder={t('loginForm.termsAndConditions.placeholder')}
              onChange={value => {
                onChange(value);
              }}
              type="checkBox"
              value={value}
            />
          )}
        />
      </View>

      <View style={styles.btnContainer}>
        <Btn
          disabled={!isValid}
          label={t('loginForm.btnLogin.label')}
          onPress={handleSubmit(onSubmit)}
          background={false}
          textColor={colors.light}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  termsAndConditionsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
