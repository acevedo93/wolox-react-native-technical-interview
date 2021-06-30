import React from 'react';
import {createContext, useEffect, useContext, useReducer} from 'react';
import {IBook} from '../../interfaces/book';
import booksApi from '../../api/api';
import {useLng} from '../../hooks/useLng';
import {AuthContext} from '../auth/AuthContext';
import {BooksState, booksReducer} from './booksReducer';

interface BooksContextProps extends BooksState {
  handleSearch: (state: boolean) => void;
  getBooks: () => Promise<void>;
  getSuggestions: (genre: IBook) => IBook[];
  searchBooks: (search: string) => void;
}

const booksInitialState: BooksState = {
  error: {status: false, msg: ''},
  loading: false,
  books: [],
  filterBooks: [],
  search: false,
};

export const BooksContext = createContext({} as BooksContextProps);

export const BooksProvider = ({children}: any) => {
  const {t} = useLng();
  const {status} = useContext(AuthContext);
  const [state, dispatch] = useReducer(booksReducer, booksInitialState);

  useEffect(() => {
    if (status === 'authSuccess') {
      getBooks();
    }
  }, [status]);

  const getBooks = async () => {
    dispatch({type: 'LOADING'});
    setTimeout(async () => {
      try {
        const resp = await booksApi.get<IBook[]>('/books');
        dispatch({type: 'REQUEST_BOOKS', payload: {books: resp.data}});
      } catch (error) {
        errorHandler(true, t('errorNetwork.label'));
      }
    }, 2000);
  };

  const getSuggestions = (bookSelected: IBook) => {
    const suggestions = state.books?.filter(
      book => book.genre === bookSelected.genre && book.id != bookSelected.id,
    );
    return suggestions?.length ? suggestions : [];
  };

  const searchBooks = (search: string) => {
    if (search.length && search.length > 1) {
      errorHandler(false);
      const actualSearch = state.books?.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      );
      if (actualSearch?.length) {
        dispatch({type: 'FILTER_BOOKS', payload: {books: actualSearch}});
      } else {
        dispatch({type: 'FILTER_BOOKS', payload: {books: []}});
        errorHandler(true, t('errorSearch.label'));
      }
    } else {
      dispatch({type: 'FILTER_BOOKS', payload: {books: []}});
    }
  };

  const handleSearch = (state: boolean) => {
    if (state) return dispatch({type: 'SEARCH', payload: {status: true}});
    dispatch({type: 'SEARCH', payload: {status: false}});
    dispatch({type: 'FILTER_BOOKS', payload: {books: []}});
  };

  const errorHandler = (status: boolean, msg: string = '') => {
    dispatch({
      type: 'ERROR',
      payload: {
        status,
        msg,
      },
    });
  };

  return (
    <BooksContext.Provider
      value={{
        getBooks,
        getSuggestions,
        searchBooks,
        handleSearch,
        ...state,
      }}>
      {children}
    </BooksContext.Provider>
  );
};
