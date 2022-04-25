import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignupScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Icon
          name="arrow-left"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icon>
      </TouchableOpacity>
      <Text style={styles.signup}>Sign up</Text>
      <Text style={styles.txt}>
        Enter your basic information. It{'\n'} only takes a minute.
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'First name'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={'Last name'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={'Date of birth'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={'Re-enter password'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
      </View>
      <View style={styles.horizontal}>
        <TextInput
          style={styles.code}
          placeholder={'Code'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.number}
          placeholder={'Phone number'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Preferred pronoun'}
          placeholderTextColor="white"
          fontFamily="Public Sans"
          color="white"
        />
      </View>
      <Text style={styles.help}>
        Helps us recommend more relevant content and events
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Location')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
  signup: {
    fontSize: 30,
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    left: 15,
    height: 40,
  },
  txt: {
    fontSize: 15,
    fontFamily: 'Prompt',
    color: 'white',
    lineHeight: 30,
    height: 55,
    margin: 10,
  },
  input: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 6,
  },
  horizontal: {
    flexDirection: 'row',
  },
  code: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 7,
    width: 80,
  },
  number: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 7,
    width: 240,
  },
  help: {
    color: 'white',
    margin: 5,
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
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
});
