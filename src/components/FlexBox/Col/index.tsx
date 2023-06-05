/**
 * @AUTOR Vanderson de Moura Vauruk
 * LinkedIn: https://www.linkedin.com/in/vauruk/?locale=en_US
 * @param params
 */
import React from 'react';
import {Props} from './types';
import {View} from 'react-native';
import styles from './styles';

const Col: React.FC<Props> = ({testID, style, children, flex = 1}: Props) => {
  return (
    <>
      <View testID={testID} style={[styles(flex).content, style]}>
        {children}
      </View>
    </>
  );
};

export default Col;
