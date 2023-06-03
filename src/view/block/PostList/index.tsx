import React from 'react';

import {FlatList, Text, View} from 'react-native';
import {IProps} from './types';

const PostList: React.FC<IProps> = (props: IProps) => {
  const {postList} = props;

  const renderItem = ({item}) => {
    return (
      <View key={item.link_flair_template_id}>
        <Text>{item.data.title}</Text>
        <Text style={{backgroundColor: 'red'}}>{item.data.selftext}</Text>
      </View>
    );
  };
  console.log('PostList:  ', postList);
  return (
    <View style={{height: '100%'}}>
      <FlatList
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.created}
      />
    </View>
  );
};

export default PostList;
