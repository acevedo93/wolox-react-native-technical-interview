import React from 'react';
import {createContext, useEffect, useState, useRef} from 'react';
import {IBook} from '../../interfaces/book';
import booksApi from '../../api/api';
import {IError} from '../../interfaces/error';
import {useLng} from '../../hooks/useLng';

type BooksContextProps = {
  books: IBook[] | undefined;
  loading: boolean;
  error: IError | undefined;
  search: boolean | undefined;
  filterBooks: IBook[] | [];
  handleSearch: (state: boolean) => void;
  getBooks: () => Promise<void>;
  getSuggestions: (genre: IBook) => IBook[];
  searchBooks: (search: string) => void;
};

export const BooksContext = createContext({} as BooksContextProps);

export const BooksProvider = ({children}: any) => {
  const {t} = useLng();
  const [books, setBooks] = useState<IBook[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<IError>();
  const [search, setSearch] = useState<boolean>();
  const [filterBooks, setFilterBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    setLoading(true);
    errorHandler(false);
    setTimeout(async () => {
      try {
        const resp = await booksApi.get<IBook[]>('/books');
        setBooks(resp.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        errorHandler(true, t('errorNetwork.label'));
        setLoading(false);
      }
    }, 2000);
  };
  const errorHandler = (status: boolean, msg: string = '') => {
    setError({
      status,
      msg,
    });
  };

  const getSuggestions = (bookSelected: IBook) => {
    const suggestions = books?.filter(
      book => book.genre === bookSelected.genre && book.id != bookSelected.id,
    );
    return suggestions?.length ? suggestions : [];
  };

  const searchBooks = (search: string) => {
    if (search.length && search.length > 1) {
      errorHandler(false);
      const actualSearch = books?.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase()),
      );
      if (actualSearch?.length) {
        setFilterBooks(actualSearch);
      } else {
        setFilterBooks([]);
        errorHandler(true, t('errorSearch.label'));
      }
    } else {
      setFilterBooks([]);
      errorHandler(false);
    }
  };

  const handleSearch = (state: boolean) => {
    if (state) return setSearch(true);
    setFilterBooks([]);
    errorHandler(false);
    return setSearch(false);
  };

  return (
    <BooksContext.Provider
      value={{
        getBooks,
        books,
        loading,
        error,
        getSuggestions,
        searchBooks,
        search,
        handleSearch,
        filterBooks,
      }}>
      {children}
    </BooksContext.Provider>
  );
};
