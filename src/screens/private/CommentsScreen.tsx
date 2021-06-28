import React from 'react';

import {MainContainer} from '../../components/MainContainer';
import {Waves} from '../../components/Waves';
import {IComment} from '../../interfaces/book';
import {CommentsList} from '../../components/CommentsList';

interface Props {
  route: any;
}

export const CommentsScreen = ({route}: Props) => {
  const comments: IComment[] = route?.params?.comments;
  return (
    <MainContainer>
      <Waves screenNumber={1} />
      <CommentsList comments={comments} />
    </MainContainer>
  );
};
