import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { buttons, styles, text } from './Style';

const Component = () => (
  <View style={styles.container}>
    <Text style={text.normal}>
      Separate Component and Styles in different files:
    </Text>
    <Pressable style={[styles.buttonContainer, buttons.primary]}>
      <Text style={[text.normal, text.primaryBtn]}>Primary</Text>
    </Pressable>
    <Pressable style={[styles.buttonContainer, buttons.secondary]}>
      <Text style={[text.normal, text.secondaryBtn]}>Secondary</Text>
    </Pressable>
  </View>
);

export default Component;
