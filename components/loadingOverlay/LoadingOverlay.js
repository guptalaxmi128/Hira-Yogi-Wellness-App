import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

const LoadingOverlay = ({ isLoading }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isLoading}
      onRequestClose={() => {}}
    >
      <View style={styles.overlayContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});

export default LoadingOverlay;
