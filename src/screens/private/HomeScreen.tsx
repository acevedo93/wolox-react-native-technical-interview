import React, {useContext, useEffect} from 'react';
import {Waves} from '../../components/Waves';
import {BooksContext} from '../../context/books/BooksContext';
import {LoaderData} from '../../components/Loader';
import {BookList} from '../../components/BookList';
import {MainContainer} from '../../components/MainContainer';
import {useNavigation} from '@react-navigation/native';

import {SearchBar} from '../../components/SearchBar';
import {Text} from 'react-native';
import {useLng} from '../../hooks/useLng';
export const HomeScreen = () => {
  const {books, loading, error, search, filterBooks} = useContext(BooksContext);
  const {t} = useLng();
  const navigator = useNavigation();
  const handleSearch = () => {
    return navigator.setOptions({
      headerTitle: search ? (
        () => <SearchBar />
      ) : (
        <Text style={{textAlign: 'center', marginLeft: 20}}>
          {t('homeScreen.headerTitle.label')}
        </Text>
      ),
    });
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <MainContainer>
      <Waves />
      <LoaderData loading={loading} error={error}>
        <BookList books={filterBooks.length ? filterBooks : books} />
      </LoaderData>
    </MainContainer>
  );
};
