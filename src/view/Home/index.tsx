import React, {useEffect} from 'react';
import {RootState, useAppDispatch} from '../../store';

import {SafeAreaView, useColorScheme} from 'react-native';
import {IProps} from './types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {fetchPostsForm} from '../../store/posts';
import {Loading} from '../../components';
import PostList from '../block/PostList';
import BarSort from '../block/BarSort';

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

  return (
    <SafeAreaView style={[backgroundStyle]}>
      <BarSort />
      <Loading loading={loading} isDarkMode={isDarkMode} />
      {!loading && <PostList postList={postList} />}
    </SafeAreaView>
  );
};

export default Home;
