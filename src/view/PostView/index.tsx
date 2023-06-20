import React, {useEffect, useState} from 'react';

import {ActivityIndicator, View} from 'react-native';
import {IProps} from './types';
import {WebView} from 'react-native-webview';
import styles from './styles';
import consoleDebug from '../../util/debugMode';

const PostView: React.FC<IProps> = props => {
  const [urlLocal, setUrlLocal] = useState<string>('');
  const {route} = props;

  useEffect(() => {
    const {url} = route.params;
    setUrlLocal(url);
  }, []);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        source={{
          uri: urlLocal,
        }}
        cacheEnabled={false}
        cacheMode="LOAD_NO_CACHE"
        startInLoadingState={true}
        onLoadProgress={e => __DEV__ && consoleDebug(e.nativeEvent.progress)}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          __DEV__ && console.warn('WebView error: ', nativeEvent);
        }}
        renderLoading={() => (
          <View style={styles.loading}>
            <View>
              <ActivityIndicator size="large" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostView;
