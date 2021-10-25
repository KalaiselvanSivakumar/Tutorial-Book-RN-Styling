/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import InlineStyle from './app/InlineStyle';
import StyleSheetSample from './app/StyleSheetSample';
import Component from './app/separate-styles/Component';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <InlineStyle />
        <StyleSheetSample />
        <Component />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
