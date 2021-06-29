import React from 'react';
import {IComment} from '../interfaces/book';
import {View, Text, StyleSheet} from 'react-native';
import {Comment} from './Comment';
import {colors} from '../styles/colors';
import {Btn} from './Btn';
import {useNavigation} from '@react-navigation/native';
import {useLng} from '../hooks/useLng';
import {globalStyles, BORDER_RADIUS} from '../styles/GlobalStyles';

interface Props {
  comments: IComment[] | undefined;
}
export const CommentsCard = ({comments}: Props) => {
  const Navigator = useNavigation();
  const {t} = useLng();
  if (comments?.length) {
    return (
      <View style={[globalStyles.verticalSpaces, globalStyles.shadow]}>
        <View style={globalStyles.verticalSpaces}>
          <Text style={globalStyles.title}>{t('comments.title.label')}</Text>
        </View>
        <View style={styles.comments}>
          <View style={globalStyles.verticalSpaces}>
            <Comment comment={comments[0]} />
          </View>
          <View style={globalStyles.verticalSpaces}>
            <Comment comment={comments[1]} />
          </View>

          {comments.length > 2 && (
            <Btn
              label={t('comments.btnSeeAll.label')}
              onPress={() => {
                Navigator.navigate('CommentsScreen', {comments});
              }}
              style={{
                ...globalStyles.verticalSpaces,
                marginHorizontal: 50,
                borderColor: colors.primary,
                paddingVertical: 3,
              }}
            />
          )}
        </View>
      </View>
    );
  }
  return <></>;
};

const styles = StyleSheet.create({
  comments: {
    backgroundColor: colors.lightShade,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
});
