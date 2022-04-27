import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';

const SecondScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/onboard2.png')}
          resizeMode="cover"
          style={{
            // justifyContent: 'center',
            height: 720,
            width: 400,
            // resizeMode: 'contain',
            // backgroundColor: 'blue',
            // marginTop: 1,
          }}>
          <Text style={styles.Text}>
            Queer events are{'\n'}more than a good{'\n'}time; they are a{'\n'}
            sanctuary.
          </Text>
          <Text style={styles.subtitle}>
            Foster community and elevate your {'\n'}event-planning efforts
            today. Kiki{'\n'}
            takes the hassle out of event {'\n'}planning, so that you can be an
            even{'\n'}
            better host.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
            }}>
            <View style={[styles.indicator]}></View>
            <View style={[styles.indicator1]}></View>
            <View style={[styles.indicator2]}></View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: 24,
  },

  Text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    top: 300,
    marginHorizontal: 15,
  },
  subtitle: {
    color: 'white',
    fontSize: 19,
    top: 320,
    marginHorizontal: 15,
  },
  indicator1: {
    height: 8,
    width: 18,
    left: 16,
    backgroundColor: 'green',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 360,
    marginRight: 1,
  },
  indicator2: {
    height: 8,
    width: 8,
    // right: 20,
    backgroundColor: 'white',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 360,
    marginLeft: 20,
  },
  indicator: {
    height: 8,
    width: 8,
    left: 10,
    backgroundColor: 'white',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 360,
  },
});

export default SecondScreen;
