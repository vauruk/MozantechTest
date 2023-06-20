import React, {useState} from 'react';

import {IProps} from './types';
import styles from './styles';
import Row from '../../../components/FlexBox/Row';
import Col from '../../../components/FlexBox/Col';
import {useAppDispatch} from '../../../store';
import {handleSortList} from '../../../store/posts';
import {SortType} from '../../../components/Button/types';
import {Button} from '../../../components';

const BarSort: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();

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
