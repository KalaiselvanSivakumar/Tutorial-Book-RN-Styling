import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProfileCard = () => (
  <View style={styles.container}>
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={require('../../resources/images/user.png')}
        />
      </View>
      <View>
        <Text style={styles.cardName}>John Doe</Text>
      </View>
      <View style={styles.cardOccupationContainer}>
        <Text style={styles.cardOccupation}>React Native Developer</Text>
      </View>
      <View>
        <Text style={styles.cardDescription}>
          John is a really great JavaScript developer. He loves using JS to
          build React Native applications for iOS and android.
        </Text>
      </View>
    </View>
  </View>
);

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    backgroundColor: profileCardColor,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 20,
    width: 300,
    height: 400,
  },
  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingBottom: 5,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 3,
  },
  cardOccupation: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontStyle: 'italic',
    marginVertical: 10,
    marginHorizontal: 40,
  },
});

export default ProfileCard;
