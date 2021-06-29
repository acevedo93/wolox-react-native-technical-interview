import React, {useContext} from 'react';
import {View, StyleSheet, Dimensions, TextInput, Platform} from 'react-native';
import {useLng} from '../hooks/useLng';
import {BooksContext} from '../context/books/BooksContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {FONT_FAMILY} from '../styles/GlobalStyles';

const windowWidth = Dimensions.get('window').width;

export const SearchBar = () => {
  const {searchBooks, handleSearch} = useContext(BooksContext);
  const {t} = useLng();

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          selectionColor={colors.light}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder={t('searchBar.placeholder.label')}
          placeholderTextColor={colors.mediumTint}
          autoCapitalize="none"
          onChangeText={value => searchBooks(value)}
        />
      </View>
      <View style={styles.iconClose}>
        <TouchableOpacity onPress={() => handleSearch(false)}>
          <Icon name="close" color={colors.light} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 80,
    flexDirection: 'row',
  },
  input: {
    margin: 15,
    height: 40,
    paddingLeft: 10,
    fontFamily: FONT_FAMILY,
    color: colors.light,
    width: windowWidth - 140,
  },
  iconClose: {
    zIndex: 1,
    position: 'absolute',
    left: Platform.OS === 'ios' ? 300 : 270,
    top: 20,
  },
});
