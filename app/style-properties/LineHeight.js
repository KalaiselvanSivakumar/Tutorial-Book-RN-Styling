import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const LineHeight = () => (
  <View style={styles.container}>
    <TextContainer>
      <LeftText>Text A</LeftText>
    </TextContainer>
    <TextContainer>
      <LeftText style={{ lineHeight: 100 }}>Text B</LeftText>
    </TextContainer>
    <TextContainer>
      <LeftText>Text C</LeftText>
    </TextContainer>
    <TextContainer>
      <LeftText>{Platform.OS}</LeftText>
    </TextContainer>
  </View>
);

const TextContainer = props => (
  <View style={[styles.textContainer, props.style]}>{props.children}</View>
);

const LeftText = props => (
  <Text style={[styles.leftText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    margin: 40,
    marginTop: 100,
  },
  textContainer: {
    borderWidth: 1,
  },
  leftText: {
    fontSize: 20,
  },
});

export default LineHeight;
