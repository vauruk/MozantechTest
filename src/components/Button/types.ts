import {StyleProp, ViewStyle} from 'react-native';

export interface Props {
  testID?: string;
  style?: StyleProp<ViewStyle>;
  active: boolean;
  sortType: SortType;
  textButton: string;
  onPress: () => void;
}

export enum SortType {
  NEW,
  TOP,
  POPULAR,
  HOT,
  NONE,
}
