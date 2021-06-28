import React, {useContext} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
import {BooksContext} from '../context/books/BooksContext';

export const SearchBtn = () => {
  const {handleSearch, search} = useContext(BooksContext);
  if (!search) {
    return (
      <View style={styles.searchBtn}>
        <TouchableOpacity onPress={() => handleSearch(true)}>
          <Icon name="search-outline" color={colors.light} size={30} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return <></>;
  }
};
const styles = StyleSheet.create({
  searchBtn: {
    marginRight: 10,
  },
});
