import React, {useEffect, useState} from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {IProps} from './types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';
import styles from './styles';
import consoleDebug from '../../util/debugMode';

const PostView: React.FC<IProps> = props => {
  const [url, setUrl] = useState<string>('');
  const {route} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    consoleDebug('URL', url);
    const {url} = route.params;
    setUrl(url);
  }, []);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        source={{
          uri: url,
          // uri: 'https://www.reddit.com/r/pics/comments/13nhxnv/we_did_a_thing_well_you_did_30_million_times/',
          // uri: 'https://reactnative.dev/docs/0.61/webview',
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
