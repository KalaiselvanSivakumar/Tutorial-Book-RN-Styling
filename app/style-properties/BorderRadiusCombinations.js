import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BorderRadiusCombinations = () => (
  <View style={styles.container}>
    <ContainerComponent style={{ borderRadius: 20 }}>
      <CenteredText>Example 1: {'\n'}4 Rounded Corners</CenteredText>
    </ContainerComponent>
    <ContainerComponent
      style={{ borderTopRightRadius: 60, borderBottomRightRadius: 60 }}>
      <CenteredText>Example 2: {'\n'}D Shape</CenteredText>
    </ContainerComponent>
    <ContainerComponent
      style={{ borderTopLeftRadius: 30, borderBottomRightRadius: 30 }}>
      <CenteredText>Example 3: {'\n'}Leaf Shape</CenteredText>
    </ContainerComponent>
    <ContainerComponent style={{ borderRadius: 60 }}>
      <CenteredText>Example 4: {'\n'}Circle</CenteredText>
    </ContainerComponent>
  </View>
);

const ContainerComponent = props => (
  <View style={[styles.box, props.style]}>{props.children}</View>
);

export const CenteredText = props => (
  <Text style={styles.centered}>{props.children}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 75,
    justifyContent: 'center',
  },
  box: {
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: 'grey',
    borderWidth: 2,
    justifyContent: 'center',
  },
  centered: {
    textAlign: 'center',
    margin: 10,
  },
});

export default BorderRadiusCombinations;
