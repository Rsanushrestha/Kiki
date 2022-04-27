import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangeScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Code')}>
        <Icon
          name="arrow-back"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icon>
      </TouchableOpacity>
      <Text style={styles.login}>Change password</Text>
      <Text style={styles.txt}>
        Enter and confirm your new {'\n'} password.
      </Text>
      <View style={styles.new}>
        <TextInput
          style={{flex: 1}}
          placeholder={'New password'}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          color="white"
          secureTextEntry={true}
        />
        <Icon
          name="md-eye"
          size={25}
          style={{
            color: 'white',
            alignSelf: 'center',
            paddingLeft: 15,
            paddingRight: 15,
          }}
        />
      </View>
      <View style={styles.new}>
        <TextInput
          style={{flex: 1}}
          placeholder={'Re-enter new password'}
          placeholderTextColor="#637381"
          fontFamily="Public Sans"
          color="white"
          secureTextEntry={true}
        />
        <Icon
          name="md-eye"
          size={25}
          style={{
            color: 'white',
            alignSelf: 'center',
            paddingLeft: 15,
            paddingRight: 15,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Cong')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Submit</Text>
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
    left: 10,
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
    top: 40,
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
    margin: 7,
  },
  new: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 7,
    paddingLeft: 10,
    flexDirection: 'row',
  },
});
export default ChangeScreen;
