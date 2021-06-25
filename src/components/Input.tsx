import React from 'react';
import {
  View,
  TextInput,
  Platform,
  StyleSheet,
  Text,
  Button,
} from 'react-native';
import {useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export interface Props {
  label?: string;
  placeholder: string;
  type: 'text' | 'date' | 'email' | 'checkBox';
  value: string | Date | boolean | undefined;
  onchange: (value: string | Date | boolean | undefined) => void;
}

export const Input = ({
  label = '',
  placeholder,
  onchange,
  value,
  type,
}: Props) => {
  const renderDatTimePicker = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [show, setShow] = useState(Platform.OS === 'ios' ? true : false);

    const onChangeDateTime = (event: any, selectedDate: any) => {
      const currentDate = selectedDate || dateTime;
      setShow(Platform.OS === 'ios');
      setDateTime(currentDate);
      onchange(currentDate);
    };
    const showDatePicker = () => {
      setShow(true);
    };
    return (
      <View>
        <Text style={styles.title}>{label}</Text>
        {Platform.OS !== 'ios' && (
          <View>
            <Text
              style={{color: 'rgba(255, 255, 255, 0.4)', ...styles.inputField}}
              onPress={showDatePicker}>
              {dateTime ? dateTime.getDate() : placeholder}
            </Text>
            <View style={styles.underLine}></View>
          </View>
        )}
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateTime}
              mode="date"
              display="default"
              is24Hour={true}
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
        fillColor="purple"
        unfillColor="white"
        text={label}
        iconStyle={{borderColor: 'blue'}}
        onPress={onchange}
        textStyle={{color: 'white'}}
      />
    );
  };

  if (type === 'date') {
    return renderDatTimePicker();
  }
  if (type == 'checkBox') {
    return renderCheckBox();
  }
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType="email-address"
        underlineColorAndroid="white"
        style={[
          styles.inputField,
          Platform.OS === 'ios' && styles.inputFieldIos,
        ]}
        selectionColor="white"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={value => onchange(value)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {
    fontSize: 20,
  },
  inputFieldIos: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  underLine: {
    backgroundColor: 'white',
    width: '100%',
    height: 1,
    marginTop: 6,
  },
  datePicker: {
    width: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
