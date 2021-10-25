import React, { Component } from 'react';
import getStyleSheet from './styles';
import { Button, StyleSheet, View } from 'react-native';

class ThemeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({
      darkTheme: !this.state.darkTheme,
    });
  }

  render() {
    const { darkTheme } = this.state;
    const styles = getStyleSheet(darkTheme);
    const { backgroundColor } = StyleSheet.flatten(styles.container);
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Button title={backgroundColor} onPress={this.toggleTheme} />
        </View>
      </View>
    );
  }
}

export default ThemeBox;
