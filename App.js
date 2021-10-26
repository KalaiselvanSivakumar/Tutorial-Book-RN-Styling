/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import ProfileCard from "./app/card/ProfileCard";
import BorderCombinations from './app/border/BorderCombinations';
// import { SafeAreaView, ScrollView } from 'react-native';
// import ThemeBox from './app/themes/ThemeBox';
// import InlineStyle from './app/InlineStyle';
// import StyleSheetSample from './app/StyleSheetSample';
// import Component from './app/separate-styles/Component';

const App = () => {
  return (
    // <SafeAreaView>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <InlineStyle />
    //     <StyleSheetSample />
    //     <Component />
    //     <ThemeBox />
    //   </ScrollView>
    // </SafeAreaView>

    <BorderCombinations />
    // <ProfileCard />;
  );
};

export default App;
