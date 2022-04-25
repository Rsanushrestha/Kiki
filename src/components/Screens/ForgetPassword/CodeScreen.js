import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  onChangeNumber,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CodeScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Icon
          name="arrow-left"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icon>
      </TouchableOpacity>
      <Text style={styles.login}>Enter code</Text>
      <Text style={styles.txt}>
        Enter the OTP code sent to{'\n'}
        <Text style={{color: '#00AB55', left: 15}}>johandoe@gmail.com</Text>
      </Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.body}>
          <TextInput />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Change')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },

  login: {
    fontSize: 30,
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    left: 15,
    height: 55,
  },
  txt: {
    fontSize: 15,
    fontFamily: 'Prompt',
    color: 'white',
    lineHeight: 25,
    height: 75,
    margin: 10,
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
    // top: 10,
    // borderColor: '#00AB55',
    // borderWidth: 1,

    borderRadius: 7,
  },
  signuptxt: {
    color: 'black',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 2,
    margin: 5,
  },
});
export default CodeScreen;
