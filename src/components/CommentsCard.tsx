import React from 'react';
import {IComment} from '../interfaces/book';
import {View, Text, StyleSheet} from 'react-native';

import {Comment} from './Comment';
import {colors} from '../styles/colors';
import {Btn} from './Btn';
import {useNavigation} from '@react-navigation/native';
import {useLng} from '../hooks/useLng';

interface Props {
  comments: IComment[] | undefined;
}
export const CommentsCard = ({comments}: Props) => {
  const Navigator = useNavigation();
  const {t} = useLng();
  if (comments?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{t('comments.title.label')}</Text>
        <View style={styles.comments}>
          <View style={styles.commentsContainer}>
            <Comment comment={comments[0]} />
          </View>
          <View style={styles.commentsContainer}>
            <Comment comment={comments[1]} />
          </View>

          {comments.length > 2 && (
            <Btn
              label={t('comments.btnSeeAll.label')}
              onPress={() => {
                Navigator.navigate('CommentsScreen', {comments});
              }}
              style={{
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
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    marginBottom: 10,
    fontWeight: '700',
    color: colors.dark,
  },
  commentsContainer: {
    marginBottom: 10,
  },
  comments: {
    backgroundColor: colors.lightShade,
    marginBottom: 10,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
});
