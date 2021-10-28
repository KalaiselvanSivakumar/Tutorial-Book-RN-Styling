import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CenteredText } from './BorderRadiusCombinations';

const PositionCombinations = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <BlockComponent>
        <CenteredText>A</CenteredText>
      </BlockComponent>
      <BlockComponent>
        <CenteredText>B</CenteredText>
        <View style={[styles.tinyBlock, styles.bottomRightPosition]}>
          <CenteredText>E</CenteredText>
        </View>
      </BlockComponent>
      <BlockComponent>
        <CenteredText>C</CenteredText>
      </BlockComponent>
    </View>
    <BlockComponent style={styles.bottomRightPosition}>
      <CenteredText>D</CenteredText>
    </BlockComponent>
  </View>
);

const BlockComponent = props => (
  <View style={[styles.blockContainer, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    margin: 40,
    marginTop: 100,
    borderWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  blockContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
  },
  tinyBlock: {
    width: 35,
    height: 35,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  bottomRightPosition: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default PositionCombinations;
