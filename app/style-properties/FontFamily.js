import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { CenteredText } from './BorderRadiusCombinations';

const FontFamily = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <CenteredText style={styles.centeredText}>
        I am a monospaced font on both platforms.
      </CenteredText>
      <BottomText>{Platform.OS}</BottomText>
    </View>
  </View>
);

const BottomText = props => (
  <CenteredText
    style={[
      styles.centeredText,
      { position: 'absolute', bottom: 0 },
      props.style,
    ]}>
    {props.children}
  </CenteredText>
);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 400,
    margin: 40,
    marginTop: 100,
    borderWidth: 1,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centeredText: {
    fontSize: 24,
    ...Platform.select({
      ios: {
        fontFamily: 'American Typewriter',
      },
      android: {
        fontFamily: 'monospace',
      },
    }),
  },
});

export default FontFamily;
