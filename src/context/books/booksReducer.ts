import {IBook} from '../../interfaces/book';

import {IError} from '../../interfaces/error';

export interface BooksState {
  books: IBook[] | [];
  filterBooks: IBook[] | [];
  loading: boolean;
  error: IError | undefined;
  search: boolean | undefined;
}

type BooksAction =
  | {type: 'LOADING'}
  | {type: 'REQUEST_BOOKS'; payload: {books: IBook[]}}
  | {type: 'FILTER_BOOKS'; payload: {books: IBook[]}}
  | {type: 'ERROR'; payload: IError}
  | {type: 'SEARCH'; payload: {status: boolean}};

export const booksReducer = (
  state: BooksState,
  action: BooksAction,
): BooksState => {
  switch (action.type) {
    case 'REQUEST_BOOKS':
      return {
        ...state,
        books: action.payload.books,
        loading: false,
        error: {
          status: false,
          msg: '',
        },
        search: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: {
          status: false,
          msg: '',
        },
      };

    case 'FILTER_BOOKS':
      return {
        ...state,
        loading: false,
        filterBooks: action.payload.books,
        error: {
          status: false,
          msg: '',
        },
      };
    case 'SEARCH':
      return {
        ...state,
        search: action.payload.status,
        error: {
          status: false,
          msg: '',
        },
      };
    case 'ERROR': {
      return {
        ...state,
        error: {
          status: true,
          msg: action.payload.msg,
        },
        loading: false,
      };
    }

    default:
      return state;
  }
};
