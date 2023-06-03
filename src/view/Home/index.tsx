import React, {useEffect} from 'react';
import {RootState, useAppDispatch} from '../../store';
//import {useSelector} from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  ActivityIndicator,
} from 'react-native';
import {IProps} from './types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {fetchPostsForm} from '../../store/posts';
import styles from './styles';
import {Loading} from '../../components';
import PostList from '../block/PostList';
import consoleDebug from '../../util/debugMode';

const Home: React.FC<IProps> = (props: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.postsForm.loading);
  const postList = useSelector((state: RootState) => state.postsForm.postList);

  useEffect(() => {
    dispatch(fetchPostsForm());
  }, []);

  consoleDebug('PostList', PostList);
  return (
    <SafeAreaView style={backgroundStyle}>
      <Loading loading={loading} isDarkMode={isDarkMode} />
      <PostList postList={postList} />
    </SafeAreaView>
  );
};

export default Home;
