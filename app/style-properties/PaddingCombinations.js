import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CenteredText } from './BorderRadiusCombinations';
import {
  ContainerComponent,
  styles as combinationStyles,
} from './MarginCombinations';

const PaddingCombinations = () => (
  <View style={combinationStyles.container}>
    <View style={combinationStyles.blockContainer}>
      <ContainerComponent>
        <CenteredText style={styles.textContent}>A</CenteredText>
      </ContainerComponent>
    </View>
    <View style={combinationStyles.blockContainer}>
      <ContainerComponent style={{ paddingTop: 50 }}>
        <CenteredText style={styles.textContent}>B</CenteredText>
      </ContainerComponent>
    </View>
    <View style={combinationStyles.blockContainer}>
      <ContainerComponent style={{ paddingTop: 50, paddingLeft: 10 }}>
        <CenteredText style={styles.textContent}>C</CenteredText>
      </ContainerComponent>
    </View>
    <View style={combinationStyles.blockContainer}>
      <ContainerComponent style={{ paddingTop: -10, paddingLeft: -10 }}>
        <CenteredText style={styles.textContent}>D</CenteredText>
      </ContainerComponent>
    </View>
    <View style={combinationStyles.blockContainer}>
      <ContainerComponent style={{ paddingTop: -30, paddingLeft: -20 }}>
        <CenteredText style={styles.textContent}>E</CenteredText>
      </ContainerComponent>
    </View>
  </View>
);

const styles = StyleSheet.create({
  textContent: {
    borderWidth: 1,
    backgroundColor: 'lightgrey',
  },
});

export default PaddingCombinations;
