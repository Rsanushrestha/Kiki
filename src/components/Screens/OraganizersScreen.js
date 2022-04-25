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

const OraganizersScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
        <Icon
          name="arrow-left"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icon>
        <Text style={{color: '#00AB55', left: 18}}>Step 4/4</Text>
      </TouchableOpacity>
      <Text style={styles.login}>Follow{'\n'}Organizers</Text>
      <Text style={styles.txt}>
        Follow your favorite event{'\n'}promoters,events organizers,{'\n'}event
        spaces and bars.
      </Text>
      <View></View>
      <Text style={styles.txt}>Bar</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Congratulation')}
        style={styles.skipbtn}>
        <Text style={styles.skiptxt}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Congratulation')}
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
    height: 25,
    margin: 10,
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
    top: 300,
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
  skipbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#000E28',
    top: 300,
    margin: 10,
    borderColor: '#00AB55',
    borderWidth: 1,

    borderRadius: 7,
  },
  skiptxt: {
    color: '#00AB55',
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
export default OraganizersScreen;
