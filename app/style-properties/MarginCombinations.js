import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CenteredText } from './BorderRadiusCombinations';

const MarginCombinations = () => (
  <View style={styles.container}>
    <View style={styles.blockContainer}>
      <ContainerComponent>
        <CenteredText>A</CenteredText>
      </ContainerComponent>
    </View>
    <View style={styles.blockContainer}>
      <ContainerComponent style={{ marginTop: 50 }}>
        <CenteredText>B</CenteredText>
      </ContainerComponent>
    </View>
    <View style={styles.blockContainer}>
      <ContainerComponent style={{ marginTop: 50, marginLeft: 10 }}>
        <CenteredText>C</CenteredText>
      </ContainerComponent>
    </View>
    <View style={styles.blockContainer}>
      <ContainerComponent style={{ marginTop: -10, marginLeft: -10 }}>
        <CenteredText>D</CenteredText>
      </ContainerComponent>
    </View>
    <View style={styles.blockContainer}>
      <ContainerComponent style={{ marginTop: -30, marginLeft: -20 }}>
        <CenteredText>E</CenteredText>
      </ContainerComponent>
    </View>
  </View>
);

const ContainerComponent = props => (
  <View style={[styles.box, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 100,
  },
  blockContainer: {
    borderWidth: 1,
    width: 120,
    height: 120,
    marginLeft: 20,
    marginBottom: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
});

export default MarginCombinations;
