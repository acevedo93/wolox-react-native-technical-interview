import React, {useContext} from 'react';
import {Waves} from '../../components/Waves';
import {IBook} from '../../interfaces/book';
import {MainContainer} from '../../components/MainContainer';
import {BookDetailCard} from '../../components/BookDetailCard';
import {CommentsCard} from '../../components/CommentsCard';
import {SuggestedCarousel} from '../../components/SuggestedCarousel';
import {BooksContext} from '../../context/books/BooksContext';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  route: any;
}

export const BookDetailScreen = ({route}: Props) => {
  const book: IBook = route?.params?.book;
  const {getSuggestions} = useContext(BooksContext);

  return (
    <MainContainer>
      <Waves screenNumber={3} />
      <ScrollView>
        <BookDetailCard book={book} />
        <SuggestedCarousel suggestedBooks={getSuggestions(book)} />
        <CommentsCard comments={book.comments} />
      </ScrollView>
    </MainContainer>
  );
};
