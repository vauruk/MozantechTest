import React from 'react';

import {FlatList, Text, View} from 'react-native';
import {IProps} from './types';
import PostItem from '../PostItem';
import styles from './styles';

const PostList: React.FC<IProps> = (props: IProps) => {
  const {postList} = props;

  const renderItem = ({item}) => {
    return <PostItem item={item} />;
  };
  console.log('PostList:  ', postList);
  return (
    <View style={styles.content}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.data.created_utc.toString()}
      />
    </View>
  );
};

export default PostList;
