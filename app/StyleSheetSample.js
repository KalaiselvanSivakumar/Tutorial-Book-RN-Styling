import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StyleSheetSample = () => (
  <View style={styles.container}>
    <Text style={[styles.message, styles.warning]}>Style Sheet sample</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20,
  },
  message: {
    fontSize: 18,
  },
  warning: {
    color: 'blue',
  },
});

export default StyleSheetSample;
