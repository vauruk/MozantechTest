import React, {useState} from 'react';

import {Text, View, Image, TouchableHighlight} from 'react-native';
import {IProps} from './types';
import styles from './styles';
import Row from '../../../components/FlexBox/Row';
import Col from '../../../components/FlexBox/Col';

const BarSort: React.FC<IProps> = (props: IProps) => {
  const [activeNumber, setActiveNumber] = useState<number>(0);

  return (
    <Row style={styles().mainColSort}>
      <Col flex={0.25} style={styles().buttonColSort}>
        <TouchableHighlight
          style={styles().buttonPress}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Text>New</Text>
        </TouchableHighlight>
      </Col>
      <Col flex={0.25} style={styles().buttonColSort}>
        <TouchableHighlight
          style={styles().buttonPress}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Text>Top</Text>
        </TouchableHighlight>
      </Col>
      <Col flex={0.25} style={styles().buttonColSort}>
        <TouchableHighlight
          style={styles().buttonPress}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Text>Popular</Text>
        </TouchableHighlight>
      </Col>
      <Col flex={0.25} style={styles().buttonColSort}>
        <TouchableHighlight
          style={styles().buttonPress}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <Text>Hot</Text>
        </TouchableHighlight>
      </Col>
    </Row>
  );
};

export default BarSort;
