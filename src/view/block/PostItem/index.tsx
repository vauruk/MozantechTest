import React from 'react';

import {Text, View, Image, TouchableHighlight} from 'react-native';
import {IProps} from './types';
import styles from './styles';
import moment from 'moment';
import Row from '../../../components/FlexBox/Row';
import Col from '../../../components/FlexBox/Col';
import person from '../../../assets/person.png';
import {useNavigation} from '@react-navigation/native';
import {PathNav} from '../../app/types';

const PostItem: React.FC<IProps> = (props: IProps) => {
  const {item} = props;

  const navigation = useNavigation();

  console.log('Item post: ', PathNav.POST_VIEW, item);

  const handleNav = () => {
    navigation.navigate(PathNav.POST_VIEW, {
      url: item.data.url,
    });
  };
  return (
    <View key={item.data?.approved_at_utc} style={styles.content}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => handleNav()}>
        <>
          <Row>
            <Col flex={0.2} style={styles.startText}>
              <Image style={styles.tinyLogo} source={person} />
            </Col>
            <Col flex={0.8} style={{alignItems: 'flex-start'}}>
              <Text>Author: {item.data?.author}</Text>
              <Text>Title: {item.data?.title}</Text>
            </Col>
          </Row>
          <Row style={{marginBottom: 5, marginTop: 5}}>
            <Col flex={0.5} style={styles.startText}>
              <Text>Votes: {item.data.score}</Text>
            </Col>
            <Col flex={0.5} style={{alignItems: 'flex-end'}}>
              <Text>Comments: {item.data.num_comments}</Text>
            </Col>
          </Row>
          <Row>
            <Col flex={0.5} style={styles.startText}>
              <Text>{moment(item.data?.created_utc).fromNow()}</Text>
            </Col>
            <Col flex={0.5} style={{alignItems: 'flex-end'}}>
              <Text>
                {moment(item.data?.created_utc).format('DD/MM/yyyy - HH:mm:ss')}
              </Text>
            </Col>
          </Row>
        </>
      </TouchableHighlight>
    </View>
  );
};

export default PostItem;
