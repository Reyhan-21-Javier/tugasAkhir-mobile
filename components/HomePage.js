import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Vibration } from 'react-native';
import Toast from 'react-native-toast-message';

const HomePage = () => {
  useEffect(() => {
    triggerVibration();
    showToast();
  }, []);

  const triggerVibration = () => {
    Vibration.vibrate(4000); 
  };

  const showToast = () => {
    Toast.show({
      type: "info",
      text1: "PERHATIAN!!!!",
      text2: "Awas Gempaaaaa!!",
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/dangers.png')} style={styles.image} />
      <Text style={styles.heading}>Peringatan Bencana Alam!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  disasterText: {
    fontSize: 20,
    color: 'red',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default HomePage;
