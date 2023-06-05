import {StyleSheet} from 'react-native';

export default styles = (backgroundColor: string) => {
  return StyleSheet.create({
    buttonColSort: {
      height: 40,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    buttonPress: {
      width: '100%',
      height: '100%',
      backgroundColor: backgroundColor ? backgroundColor : '#ffffff',
      alignContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
