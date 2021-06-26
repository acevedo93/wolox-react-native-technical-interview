import {useState, useEffect} from 'react';
// import {PokemonFull} from '../interfaces/pokemonInterfaces';
// import {pokemonApi} from '../api/pokemonApi';
import booksApi from '../api/api';

export const useBooksList = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState();

  const loadBooks = async () => {
    const resp = await booksApi.get('/books');
    resp.data;
  };

  useEffect(() => {
    //loadBooks();
  }, []);

  return {
    loading,
    books,
  };
};
