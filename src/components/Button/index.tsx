/**
 * @AUTOR Vanderson de Moura Vauruk
 * LinkedIn: https://www.linkedin.com/in/vauruk/?locale=en_US
 * @param params
 */
import React from 'react';
import {Props} from './types';
import {Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const Button: React.FC<Props> = ({
  testID,
  style,
  active,
  textButton,
  onPress,
}: Props) => {
  const _handlePress = () => {
    onPress?.();
  };
  return (
    <TouchableHighlight
      testID={testID}
      style={[styles(active).buttonPress, style]}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={_handlePress}>
      <Text style={styles(active).textButton}>{textButton}</Text>
    </TouchableHighlight>
  );
};

export default Button;
