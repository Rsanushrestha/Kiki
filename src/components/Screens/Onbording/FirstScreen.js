import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  Button,
} from 'react-native';
import React from 'react';

const FirstScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/onboard1.png')}
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
            The definitive{'\n'}source for queer{'\n'}fun and{'\n'}
            entertainment.
          </Text>
          <Text style={styles.subtitle}>
            Kiki is the leading social activity {'\n'}network and ticketing
            platform for in-{'\n'}person and virtual events, centering{'\n'}
            the LGBTQ+ experience.
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
    top: 330,
    marginHorizontal: 15,
  },
  subtitle: {
    color: 'white',
    fontSize: 19,
    top: 340,
    marginHorizontal: 15,
  },
  indicator: {
    height: 8,
    width: 18,
    left: 8,
    backgroundColor: 'green',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 380,
    marginRight: 3,
  },
  indicator1: {
    height: 8,
    width: 8,
    // right: 20,
    backgroundColor: 'white',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 380,
    marginLeft: 15,
  },
  indicator2: {
    height: 8,
    width: 8,
    left: 10,
    backgroundColor: 'white',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 380,
  },
});

export default FirstScreen;
