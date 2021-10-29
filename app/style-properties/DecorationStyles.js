import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { LeftText, styles as lineHeightStyles } from './LineHeight';

const DecorationStyles = () => (
  <View style={lineHeightStyles.container}>
    <LeftText style={[styles.leftText, styles.italic]}>A) Italic</LeftText>
    <LeftText
      style={[
        styles.leftText,
        { textDecorationLine: 'underline line-through' },
      ]}>
      B) Underline and Line Through
    </LeftText>
    <LeftText
      style={[
        styles.leftText,
        {
          textDecorationLine: 'underline line-through',
          textDecorationColor: 'red',
          textDecorationStyle: 'dotted',
        },
      ]}>
      C) Underline and Line Through with extra text decoration
    </LeftText>
    <LeftText
      style={[
        styles.leftText,
        {
          textShadowColor: 'red',
          textShadowRadius: 4,
          textShadowOffset: { width: -2, height: -2 },
        },
      ]}>
      D) Text Shadow
    </LeftText>
    <LeftText style={[styles.leftText, { letterSpacing: 5 }]}>
      E) Letter Spacing
    </LeftText>
    <LeftText
      style={[styles.leftText, { textAlign: 'center', fontWeight: 'bold' }]}>
      {Platform.OS}
    </LeftText>
  </View>
);

const styles = StyleSheet.create({
  leftText: {
    paddingBottom: 10,
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default DecorationStyles;
