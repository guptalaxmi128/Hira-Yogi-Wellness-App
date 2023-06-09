import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <WebView
      source={{ uri: url }}
      onLoad={() => console.log('Website loaded')}
      onError={() => console.log('Website error')}
      startInLoadingState={true}
      style={{margin:20}}
    />
  );
};

export default WebViewScreen;