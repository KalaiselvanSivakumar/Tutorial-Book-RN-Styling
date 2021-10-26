import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BorderCombinations = () => (
  <View style={styles.container}>
    <ContainerComponent style={{ borderWidth: 1 }}>
      <Text>borderWidth: 1</Text>
    </ContainerComponent>
    <ContainerComponent style={{ borderWidth: 3, borderLeftWidth: 0 }}>
      <Text>borderWidth: 3, borderLeftWidth: 0</Text>
    </ContainerComponent>
    <ContainerComponent style={{ borderWidth: 3, borderLeftColor: 'red' }}>
      <Text>borderWidth: 3, borderLeftColor: 'red'</Text>
    </ContainerComponent>
    <ContainerComponent style={{ borderLeftWidth: 3 }}>
      <Text>borderLeftWidth: 3</Text>
    </ContainerComponent>
    <ContainerComponent style={{ borderWidth: 1, borderStyle: 'dashed' }}>
      <Text>borderWidth: 1, borderStyle: 'dashed'</Text>
    </ContainerComponent>
  </View>
);

const ContainerComponent = props => (
  <View style={[styles.margin, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    margin: 10,
  },
});

export default BorderCombinations;
