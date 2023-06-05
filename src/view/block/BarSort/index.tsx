import React, {useState} from 'react';

import {Text, TouchableHighlight} from 'react-native';
import {IProps} from './types';
import styles from './styles';
import Row from '../../../components/FlexBox/Row';
import Col from '../../../components/FlexBox/Col';
import {RootState, useAppDispatch} from '../../../store';
import {useSelector} from 'react-redux';
import {handleSortList} from '../../../store/posts';
import {SortType} from '../../../components/Button/types';
import {Button} from '../../../components';

const BarSort: React.FC<IProps> = (props: IProps) => {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.postsForm.loading);
  const postList = useSelector((state: RootState) => state.postsForm.postList);

  const [activeBar, setActiveBar] = useState<SortType>(SortType.NONE);

  const handleSort = (activeBar: SortType) => {
    setActiveBar(activeBar);
    dispatch(handleSortList(activeBar));
  };

  return (
    <Row>
      <Col flex={0.25} style={styles().buttonColSort}>
        <Button
          onPress={() => handleSort(SortType.NEW)}
          textButton="New"
          active={activeBar === SortType.NEW}
        />
      </Col>
      <Col flex={0.25} style={styles().buttonColSort}>
        <Button
          onPress={() => handleSort(SortType.TOP)}
          textButton="Top"
          active={activeBar === SortType.TOP}
        />
      </Col>
      <Col flex={0.25} style={styles().buttonColSort}>
        <Button
          onPress={() => handleSort(SortType.POPULAR)}
          textButton="Popular"
          active={activeBar === SortType.POPULAR}
        />
      </Col>
      <Col flex={0.25} style={styles().buttonColSort}>
        <Button
          onPress={() => handleSort(SortType.HOT)}
          textButton="Hot"
          active={activeBar === SortType.HOT}
        />
      </Col>
    </Row>
  );
};

export default BarSort;
