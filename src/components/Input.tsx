import React, {useEffect} from 'react';
import {View, TextInput, Platform, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import dayjs from 'dayjs';
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from '../styles/colors';
import {FONT_FAMILY} from '../styles/GlobalStyles';

const INITIAL_DATE = new Date(2000, 0, 1);
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
    const [dateTime, setDateTime] = useState(INITIAL_DATE);
    const [show, setShow] = useState(Platform.OS === 'ios' ? true : false);
    useEffect(() => {
      onChange(new Date(INITIAL_DATE));
    }, []);

    const onChangeDateTime = (event: any, selectedDate: any) => {
      setShow(Platform.OS === 'ios');
      setDateTime(selectedDate);
      onChange(selectedDate);
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
            <DateTimePicker
              testID="dateTimePicker"
              value={dateTime}
              mode="date"
              display="default"
              is24Hour={false}
              dateFormat="day month year"
              onChange={onChangeDateTime}
              style={styles.datePicker}
              themeVariant="light"
              textColor={colors.light}
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
        textStyle={{color: colors.light, fontFamily: FONT_FAMILY}}
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
    color: colors.secondary,
    fontSize: 30,
    marginTop: 20,
    fontFamily: FONT_FAMILY,
  },
  label: {
    marginTop: 25,
    color: colors.light,
    fontFamily: FONT_FAMILY,
  },
  inputField: {
    fontSize: 20,
    color: colors.light,
    fontFamily: FONT_FAMILY,
  },
  inputFieldIos: {
    borderBottomColor: colors.lightShade,
    borderBottomWidth: 1,
    paddingBottom: 4,
    fontFamily: FONT_FAMILY,
  },
  underLine: {
    backgroundColor: colors.light,
    width: '100%',
    height: 1,
    marginTop: 6,
  },
  containerDatePicker: {},
  datePicker: {
    width: 350,
    color: 'black',
    backgroundColor: 'white',
    opacity: 0.2,
  },
});
