import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CongratulationsScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Organizers')}>
        <Icon
          name="arrow-left"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icon>
      </TouchableOpacity>
      <Text style={styles.login}>Congratulation!</Text>
      <Text style={styles.txt}>
        Please check and confirm your email to{'\n'}continue browsing our
        events.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Log in now</Text>
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
    fontSize: 34,
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    left: 15,
    height: 85,
  },
  txt: {
    fontSize: 18,
    fontFamily: 'Prompt',
    color: 'white',
    lineHeight: 25,
    height: 25,
    margin: 10,
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
    top: 410,
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
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 12,
  },
});
export default CongratulationsScreen;
