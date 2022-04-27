import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ThirdScreen = () => {
  //   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../images/onboard3.png')}
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
            Connect with{'\n'}those that matter {'\n'}most: friends,{'\n'}
            family—chosen,{'\n'}and otherwise.
          </Text>
          <Text style={styles.subtitle}>
            Plan private get-togethers, share{'\n'}events, group chat, and kiki
            in our{'\n'}safespace for private messaging.
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
  indicator2: {
    height: 8,
    width: 18,
    left: 8,
    backgroundColor: 'green',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 360,
    marginRight: 3,
  },
  indicator1: {
    height: 8,
    width: 8,
    // right: 20,
    backgroundColor: 'white',
    // marginHorizontal: 1,
    borderRadius: 4,
    top: 360,
    marginLeft: 15,
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

export default ThirdScreen;
