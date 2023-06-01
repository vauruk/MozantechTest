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

const Home: React.FC<IProps> = (props: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.postsForm.loading);
  const listPost = useSelector((state: RootState) => state.postsForm.listPost);

  useEffect(() => {
    dispatch(fetchPostsForm());
  }, []);

  console.log('HOme:  ', loading, listPost);
  return (
    <SafeAreaView style={backgroundStyle}>
      <Loading loading={loading} isDarkMode={isDarkMode} />
      <View></View>
    </SafeAreaView>
  );
};

export default Home;
