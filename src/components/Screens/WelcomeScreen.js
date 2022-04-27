import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeScreen = props => {
  // const {navigation} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../images/kikilogo.png')}
          style={{height: 61, width: 207, top: 85, alignSelf: 'center'}}
        />
      </View>
      <Text style={styles.txt}>
        A queer space for fun and games {'\n'} and togetherness.
      </Text>

      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.login}>
          <Text style={styles.logintxt}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.signup}>
          <Text style={styles.signuptxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
  txt: {
    fontSize: 18,
    // fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    lineHeight: 27,
    margin: 24,
    top: 80,
    width: 310,

    // width: 290,
    //flex: 1,
  },
  login: {
    marginHorizontal: 15,
    //width: windowWidth,
    height: 48,
    backgroundColor: '#00AB55',
    marginBottom: 15,
    borderRadius: 7,
  },
  signup: {
    // width: windowWidth,
    marginHorizontal: 15,
    height: 50,
    backgroundColor: '#000E28',
    borderColor: '#00AB55',
    borderWidth: 1,
    borderRadius: 7,
  },
  logintxt: {
    // fontFamily: 'Public Sans',
    fontSize: 15,
    color: 'black',

    textAlign: 'center',

    padding: 13,
    fontWeight: 'bold',
  },
  signuptxt: {
    color: '#00AB55',
    padding: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    justifyContent: 'space-around',
    top: 425,
  },
});

export default WelcomeScreen;
