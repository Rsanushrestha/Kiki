import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoriesScreen = props => {
  const {navigation} = props;
  const [selected, setSelected] = useState();

  const ReturnMessage = () => {
    <Text>Selected</Text>;
  };

  const ReturnMessageNot = () => {
    if (selected === true) Alert.alert('');
    else setSelected === false;
    Alert.alert('');
  };

  const onClick = () => {
    if (selected === true) {
      return <ReturnMessage />;
    } else setSelected === false;
    {
      return <ReturnMessageNot />;
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Experience')}>
        <Icons
          name="arrow-back"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icons>
        <Text style={{color: '#00AB55', left: 18}}>Step 3/4</Text>
      </TouchableOpacity>
      <Text style={styles.login}>Tell us what you{'\n'}love</Text>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontFamily: 'Prompt',
          lineHeight: 27,
          left: 15,
          top: 10,
        }}>
        Event categories
      </Text>
      <View style={styles.eventcat}>
        <TouchableOpacity onPress={onClick} style={styles.art}>
          <Text style={styles.txt}>Arts Theataer</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClick} style={styles.auto}>
          <Text style={styles.txt}>Auto, Boat, Air</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.beauty}>
          <Text style={styles.txt}>Beauty</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.business}>
          <Text style={styles.txt}>Business</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.eventcatse}>
        <TouchableOpacity style={styles.charity}>
          <Text style={styles.txt}>Charity Causes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.art}>
          <Text style={styles.txt}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.education}>
          <Text style={styles.txt}>Education</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontFamily: 'Prompt',
          lineHeight: 27,
          left: 15,
          top: 55,
        }}>
        Event types
      </Text>
      <View style={styles.eventtype}>
        <TouchableOpacity style={styles.art}>
          <Text style={styles.txt}>Art Show</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.auto}>
          <Text style={styles.txt}>Book Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.beauty}>
          <Text style={styles.txt}>Booze Cruise</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.business}>
          <Text style={styles.txt}>Brunch</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.eventtypese}>
        <TouchableOpacity style={styles.charity}>
          <Text style={styles.txt}>Bowling</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.art}>
          <Text style={styles.txt}>Class</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.education}>
          <Text style={styles.txt}>Cocktail Hour</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Congratulation')}
        style={styles.skipbtn}>
        <Text style={styles.skiptxt}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Organizers')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  skipbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#000E28',
    top: 180,
    margin: 10,
    borderColor: '#00AB55',
    borderWidth: 1,

    borderRadius: 7,
  },
  skiptxt: {
    fontFamily: 'Public Sans',
    fontSize: 15,
    color: '#00AB55',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: 15,
    fontWeight: 'bold',
  },
  signupbtn: {
    // width: windowWidth,
    marginHorizontal: 10,
    height: 50,
    backgroundColor: '#00AB55',
    top: 180,
    // borderColor: '#00AB55',
    // borderWidth: 1,

    borderRadius: 7,
  },
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
  login: {
    fontSize: 32,
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    left: 15,
    height: 85,
  },
  txt: {
    fontSize: 13,
    fontFamily: 'Prompt',
    color: 'white',
    lineHeight: 25,
    height: 25,
    margin: 10,
    marginHorizontal: 10,
    // paddingTop: 12,
  },
  signuptxt: {
    color: 'black',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // txt: {
  //   color: 'white',
  //   marginHorizontal: 15,
  //   paddingTop: 12,
  //   fontSize: 12,
  // },
  art: {
    backgroundColor: '#FC0D1B3D',
    height: 40,
    borderRadius: 20,
    borderColor: '#FC0D1B',
    borderWidth: 1,
    // left: 3,
    // right: 2,
  },
  auto: {
    backgroundColor: '#FD77283D',
    height: 40,
    borderRadius: 25,
    borderColor: '#FD7728',
    borderWidth: 1,
  },
  beauty: {
    backgroundColor: '#F756CF3D',
    height: 40,
    borderRadius: 25,
    borderColor: '#F756CF',
    borderWidth: 1,
  },
  business: {
    backgroundColor: '#6F359E3D',
    height: 40,
    borderRadius: 25,
    borderColor: '#6F359E',
    borderWidth: 1,
  },
  charity: {
    backgroundColor: '#6F359E',
    height: 40,
    borderRadius: 25,
    right: 3,
  },
  education: {
    backgroundColor: '#FEEE363D',
    height: 40,
    borderRadius: 25,
    borderColor: '#FEEE36',
    borderWidth: 1,
    left: 8,
  },
  eventcat: {
    flexDirection: 'row',
    marginHorizontal: 1,
    top: 25,
    justifyContent: 'space-between',
  },
  eventcatse: {
    flexDirection: 'row',
    marginHorizontal: 4,
    top: 35,
    // justifyContent: 'space-between',
  },
  eventtype: {
    flexDirection: 'row',
    marginHorizontal: 1,
    top: 65,
    justifyContent: 'space-between',
  },
  eventtypese: {
    flexDirection: 'row',
    marginHorizontal: 4,
    top: 85,
    // justifyContent: 'space-between',
  },

  input: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 1,
    borderRadius: 7,
    margin: 12,
  },
});
export default CategoriesScreen;
