import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {IBook} from '../interfaces/book';
import {FadeInImage} from './FadeInImage';
import {colors} from '../styles/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useLng} from '../hooks/useLng';

interface Props {
  suggestedBooks: IBook[];
}

export const SuggestedCarousel = ({suggestedBooks}: Props) => {
  const Navigator = useNavigation();
  const {t} = useLng();
  if (suggestedBooks.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{t('suggestionsCarousel.title.label')}</Text>
        <FlatList
          data={suggestedBooks}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  Navigator.navigate('BookDetailScreen', {book: item})
                }>
                <FadeInImage uri={item.image_url} style={styles.imageStyle} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: '700',
    color: colors.dark,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginHorizontal: 12,
  },
});
