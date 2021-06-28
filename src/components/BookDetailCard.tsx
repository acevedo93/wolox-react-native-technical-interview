import React from 'react';
import {IBook} from '../interfaces/book';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import {FadeInImage} from './FadeInImage';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {globalStyles, BORDER_RADIUS} from '../styles/GlobalStyles';
import analytics from '@react-native-firebase/analytics';

interface Props {
  book: IBook;
}
export const BookDetailCard = ({book}: Props) => {
  const {t} = useLng();
  return (
    <View style={[globalStyles.verticalSpaces, styles.container]}>
      <View>
        <View style={[styles.topContainer, globalStyles.verticalSpaces]}>
          <FadeInImage uri={book.image_url} style={styles.imageStyle} />
          <View style={styles.descriptionContainer}>
            <Text style={globalStyles.title}>{book.title}</Text>
            <Text style={globalStyles.subtitle}>{book.author}</Text>
            <Text style={globalStyles.chip}>{book.genre}</Text>
            <Text style={globalStyles.p}>{book.year}</Text>
            <Text style={globalStyles.p}>{book.publisher}</Text>
          </View>
        </View>
        <View style={[globalStyles.verticalSpaces, styles.btnsContainer]}>
          <Btn
            label={t('bookCardDetail.btns.addToWishList.label')}
            onPress={async () =>
              await analytics()
                .logEvent('wishList', book)
                .then(res => console.log(res))
            }
            style={{color: colors.primary, borderColor: colors.primary}}
          />
          <Btn
            label={t('bookCardDetail.btns.rent.label')}
            onPress={async () => await analytics().logEvent('rent', book)}
            style={{color: colors.primary, borderColor: colors.primary}}
            background={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightShade,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  topContainer: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: BORDER_RADIUS,
  },
  descriptionContainer: {
    marginLeft: 10,
    flex: 1,
  },
  btnsContainer: {
    marginHorizontal: 20,
  },
});
