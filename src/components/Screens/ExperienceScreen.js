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
import Icons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LocationScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <Icons
          name="arrow-back"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icons>
        <Text style={{color: '#00AB55', left: 18}}>Step 2/4</Text>
      </TouchableOpacity>
      <Text style={styles.login}>Customize your {'\n'}experience</Text>
      <Text style={styles.txt}>How would you like to use Kiki?</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder={'Select user type'}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={'What kind of organizer are you'}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder={'Name of the organizer'}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          color="white"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Categories')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Next</Text>
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
    height: 20,
    margin: 10,
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
    top: 215,
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
export default LocationScreen;
