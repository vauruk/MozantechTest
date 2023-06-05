import {StyleSheet} from 'react-native';

export default styles = (active: boolean) => {
  return StyleSheet.create({
    buttonPress: {
      width: '100%',
      height: '100%',
      backgroundColor: active ? '#273ca7' : '#ffffff',
      alignContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textButton: {
      color: active ? '#ffffff' : '#000000',
    },
  });
};
