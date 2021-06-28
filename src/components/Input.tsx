import React from 'react';
import {View, TextInput, Platform, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import dayjs from 'dayjs';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {colors} from '../styles/colors';

export interface Props {
  label?: string;
  placeholder: string;
  type: 'text' | 'date' | 'email' | 'checkBox';
  value?: any;
  underLine?: boolean;
  onChange: (value: string | Date | boolean | undefined) => void;
}

export const Input = ({
  label = '',
  placeholder,
  onChange,
  value,
  type,
  underLine,
}: Props) => {
  const renderDateTimePicker = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [show, setShow] = useState(Platform.OS === 'ios' ? true : false);

    const onChangeDateTime = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || dateTime;
      setShow(Platform.OS === 'ios');
      setDateTime(currentDate);
    };
    const showDatePicker = () => {
      setShow(true);
    };
    return (
      <View>
        <Text style={styles.title}>{label}</Text>
        {Platform.OS !== 'ios' && (
          <View>
            <Text style={styles.inputField} onPress={showDatePicker}>
              {dateTime ? dayjs(dateTime).format('MMM DD, YYYY') : placeholder}
            </Text>
            {underLine && <View style={styles.underLine}></View>}
          </View>
        )}
        <View>
          {show && (
            <RNDateTimePicker
              testID="dateTimePicker"
              value={dateTime}
              mode="date"
              display="default"
              is24Hour={false}
              maximumDate={new Date(2300, 10, 20)}
              dateFormat="day month year"
              onChange={onChangeDateTime}
              style={styles.datePicker}
            />
          )}
        </View>
      </View>
    );
  };

  const renderCheckBox = () => {
    return (
      <BouncyCheckbox
        size={25}
        fillColor={colors.secondary}
        unfillColor={colors.light}
        text={label}
        iconStyle={{borderColor: colors.lightShade}}
        onPress={onChange}
        textStyle={{color: colors.light}}
      />
    );
  };

  const renderTextInput = () => (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.mediumTint}
        keyboardType="email-address"
        underlineColorAndroid={!underLine ? 'transparent' : colors.lightShade}
        style={[
          styles.inputField,
          Platform.OS === 'ios' && underLine && styles.inputFieldIos,
        ]}
        value={value}
        selectionColor={colors.light}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={value => onChange(value)}
      />
    </View>
  );

  if (type === 'date') {
    return renderDateTimePicker();
  }
  if (type == 'checkBox') {
    return renderCheckBox();
  }
  return renderTextInput();
};

const styles = StyleSheet.create({
  title: {
    color: colors.light,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: colors.light,
    fontWeight: 'bold',
  },
  inputField: {
    fontSize: 20,
    color: colors.light,
  },
  inputFieldIos: {
    borderBottomColor: colors.lightShade,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  underLine: {
    backgroundColor: colors.light,
    width: '100%',
    height: 1,
    marginTop: 6,
  },
  datePicker: {
    width: 200,
    backgroundColor: colors.light,
    opacity: 0.2,
  },
});
