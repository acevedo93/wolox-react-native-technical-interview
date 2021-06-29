import React from 'react';
import {IBook} from '../interfaces/book';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import {FadeInImage} from './FadeInImage';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {globalStyles, BORDER_RADIUS, FONT_FAMILY} from '../styles/GlobalStyles';
import analytics from '@react-native-firebase/analytics';
import Snackbar from 'react-native-snackbar';

interface Props {
  book: IBook;
}
export const BookDetailCard = ({book}: Props) => {
  const {t} = useLng();

  const showSnakBar = () => {
    return Snackbar.show({
      text: t('added.label'),
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'ok',
        textColor: colors.secondary,
      },
      fontFamily: FONT_FAMILY,
    });
  };

  return (
    <View
      style={[
        globalStyles.verticalSpaces,
        styles.container,
        globalStyles.shadow,
      ]}>
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
            onPress={async () => {
              showSnakBar();
              await analytics().logEvent('wishList', book);
            }}
            style={{color: colors.primary, borderColor: colors.primary}}
          />
          <Btn
            label={t('bookCardDetail.btns.rent.label')}
            onPress={async () => {
              showSnakBar();
              await analytics().logEvent('rent', book);
            }}
            style={{color: colors.primary, borderColor: colors.primary}}
            background={true}
            gradient={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
