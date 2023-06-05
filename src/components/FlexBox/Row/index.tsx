/**
 * @AUTOR Vanderson de Moura Vauruk
 * LinkedIn: https://www.linkedin.com/in/vauruk/?locale=en_US
 * @param params
 */
import React from 'react';
import {Props} from './types';
import styles from './styles';
import {View} from 'react-native';

const Row: React.FC<Props> = ({testID = 'testID', style, children}: Props) => {
  return (
    <View testID={testID} style={[styles().content, style]}>
      {children}
    </View>
  );
};

export default Row;
