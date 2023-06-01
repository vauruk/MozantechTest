import React from 'react';

import {View, Text, ActivityIndicator} from 'react-native';
import {IProps} from './types';
import styles from './styles';

const Loading: React.FC<IProps> = (props: IProps) => {
  const {loading, isDarkMode} = props;

  const returnColor = () => {
    return isDarkMode ? '#ffffff' : '#eeeee';
  };

  return (
    <View style={styles.contentLoading}>
      {loading && (
        <>
          <ActivityIndicator color={returnColor()} size={'large'} />
          <Text style={{color: returnColor(), marginTop: 10}}>Loading...</Text>
        </>
      )}
    </View>
  );
};

export default Loading;
