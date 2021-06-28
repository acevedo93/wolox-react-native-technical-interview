import React, {useContext} from 'react';
import {Waves} from '../../components/Waves';
import {IBook} from '../../interfaces/book';
import {MainContainer} from '../../components/MainContainer';
import {BookDetailCard} from '../../components/BookDetailCard';
import {CommentsCard} from '../../components/CommentsCard';
import {SuggestedCarousel} from '../../components/SuggestedCarousel';
import {BooksContext} from '../../context/books/BooksContext';
import ScrollView from 'rn-faded-scrollview';

interface Props {
  route: any;
}

export const BookDetailScreen = ({route}: Props) => {
  const book: IBook = route?.params?.book;
  const {getSuggestions} = useContext(BooksContext);

  return (
    <MainContainer>
      <Waves />
      <ScrollView
        allowStartFade={true}
        allowEndFade={true}
        fadeSize={20}
        fadeColors={[
          'rgba(255, 255, 255, 0.18)',
          'rgba(255,255,255, 0.6)',
          'rgba(255,255,255, 0.9)',
        ]}>
        <BookDetailCard book={book} />
        <SuggestedCarousel suggestedBooks={getSuggestions(book)} />
        <CommentsCard comments={book.comments} />
      </ScrollView>
    </MainContainer>
  );
};
