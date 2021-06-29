import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IBook} from '../interfaces/book';
import {FadeInImage} from './FadeInImage';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useLng} from '../hooks/useLng';
import {globalStyles, OPACITY} from '../styles/GlobalStyles';

interface Props {
  suggestedBooks: IBook[];
}

export const SuggestedCarousel = ({suggestedBooks}: Props) => {
  const Navigator = useNavigation();
  const {t} = useLng();
  if (suggestedBooks.length) {
    return (
      <View style={globalStyles.verticalSpaces}>
        <Text style={globalStyles.title}>
          {t('suggestionsCarousel.title.label')}
        </Text>
        <View style={globalStyles.verticalSpaces}>
          <FlatList
            data={suggestedBooks}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={OPACITY}
                  onPress={() =>
                    Navigator.navigate('BookDetailScreen', {book: item})
                  }>
                  <FadeInImage
                    uri={item.image_url}
                    style={globalStyles.imgCarrousel}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  return <></>;
};
