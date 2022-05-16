import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import CustomButton from './contributors/CustomButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OraganizersScreen = props => {
  const {navigation} = props;
  const Array1 = [
    {
      name: 'Ralph Edwards',
      color: 'red',
      backgroundColor: '#FC0D1B3D',
      image: require('../images/pp1.png'),
    },
    {
      name: 'Productions',
      color: 'white',
      backgroundColor: '#FFFFFF3D',
      image: require('../images/pp2.png'),
    },
    {
      name: 'Arlene McCoy ',
      color: '#6F359E',
      backgroundColor: '#6F359E3D',
      image: require('../images/pp3.png'),
    },
    {
      name: 'Cameron Williamson',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp4.png'),
    },
    {
      name: 'Wade Warren',
      color: '#E4CE00',
      backgroundColor: '#FEEE363D',

      image: require('../images/pp5.png'),
    },
    {
      name: 'Mohammad’s Pro...',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp6.png'),
    },
  ];
  const Array2 = [
    {
      name: 'Ralph Edwards',
      color: 'red',
      backgroundColor: '#FC0D1B3D',
      image: require('../images/pp1.png'),
    },
    {
      name: 'Productions',
      color: 'white',
      backgroundColor: '#FFFFFF3D',
      image: require('../images/pp2.png'),
    },
    {
      name: 'Arlene McCoy ',
      color: '#6F359E',
      backgroundColor: '#6F359E3D',
      image: require('../images/pp3.png'),
    },
    {
      name: 'Cameron Williamson',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp4.png'),
    },
    {
      name: 'Wade Warren',
      color: '#E4CE00',
      backgroundColor: '#FEEE363D',

      image: require('../images/pp5.png'),
    },
    {
      name: 'Mohammad’s Pro...',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp6.png'),
    },
    {
      name: 'Cameron Williamson',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp4.png'),
    },
    {
      name: 'Wade Warren',
      color: '#E4CE00',
      backgroundColor: '#FEEE363D',

      image: require('../images/pp5.png'),
    },
    {
      name: 'Mohammad’s Pro...',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp6.png'),
    },
    {
      name: 'Cameron ',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp4.png'),
    },
    {
      name: 'Wade Warren',
      color: '#E4CE00',
      backgroundColor: '#FEEE363D',

      image: require('../images/pp5.png'),
    },
    {
      name: 'Mohammad’s',
      color: 'orange',
      backgroundColor: '#FD77283D',
      image: require('../images/pp6.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Icons
              name="arrow-back"
              size={30}
              style={{
                color: 'white',
                padding: 20,
              }}></Icons>
            <Text style={{color: '#00AB55', left: 18}}>Step 4/4</Text>
          </TouchableOpacity>
          <Text style={styles.login}>Follow{'\n'}Organizers</Text>
          <Text style={styles.txt}>
            Follow your favorite event{'\n'}promoters,events organizers,{'\n'}
            event spaces and bars.
          </Text>

          <Text style={styles.txt}>Bar</Text>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              // alignItems: 'flex-start',
              // flexShrink: 2,
            }}>
            {Array1.map((key, index) => {
              return <CustomButton arr={Array1[index]} key={key} />;
            })}
          </View>
          <Text style={styles.txt1}>Promoter</Text>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              // alignItems: 'flex-start',
              // flexShrink: 2,
            }}>
            {Array2.map((key, index) => {
              return <CustomButton arr={Array2[index]} key={key} />;
            })}
          </View>
          <View style={{marginTop: 50}}>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
    position: 'absolute',
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
    // height: 25,
    margin: 10,
    marginLeft: 20,
  },
  txt1: {
    fontSize: 18,
    fontFamily: 'Prompt',
    color: 'white',
    lineHeight: 25,
    // height: 25,
    margin: 10,
    marginLeft: 20,
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
    // top: 300,
    // borderColor: '#00AB55',
    // borderWidth: 1,
    marginBottom: 10,

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
    // top: 300,
    position: 'relative',
    margin: 10,
    marginBottom: 20,
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

  container1: {
    flex: 1,
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
