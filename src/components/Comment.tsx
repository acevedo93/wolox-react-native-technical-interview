import React from 'react';
import {IComment} from '../interfaces/book';
import {View, Text, StyleSheet} from 'react-native';
import {FadeInImage} from './FadeInImage';
import {colors} from '../styles/colors';
import {globalStyles} from '../styles/GlobalStyles';

interface Props {
  comment: IComment | undefined;
}

const USER_IMG_URL =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
export const Comment = ({comment}: Props) => {
  return (
    <View style={styles.container}>
      <FadeInImage uri={USER_IMG_URL} style={styles.image} />
      <View style={styles.commentContainer}>
        <Text style={[globalStyles.subtitle, {color: colors.primaryTint}]}>
          {comment?.author}
        </Text>
        <Text style={globalStyles.p}>{comment?.comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 12,
  },
  commentContainer: {
    flex: 1,
  },
});
