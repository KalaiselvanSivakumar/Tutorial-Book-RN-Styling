import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    margin: 4,
    borderRadius: 4,
    height: 40,
  },
});

const buttons = StyleSheet.create({
  primary: {
    backgroundColor: '#2323bc',
  },
  secondary: {
    backgroundColor: '#236723',
  },
});

const text = StyleSheet.create({
  normal: {
    fontSize: 16,
  },
  primaryBtn: {
    color: 'white',
  },
  secondaryBtn: {
    color: 'white',
  },
});

export { styles, buttons, text };
