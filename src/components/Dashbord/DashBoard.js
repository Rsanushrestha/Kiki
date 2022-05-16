import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import CircularBar from './CircularBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DashBoard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.date}>
          <TextInput
            style={{
              flex: 1,
            }}
            placeholder={' All events '}
            placeholderTextColor="white"
            fontFamily="Public Sans"
            color="white"
          />
          <Icons
            name="chevron-down"
            size={25}
            style={{
              color: 'white',
              alignSelf: 'center',
              // paddingLeft: 15,
              paddingRight: 15,
            }}
          />
        </View>
        <View style={styles.date}>
          <TextInput
            style={{
              flex: 1,
            }}
            placeholder={'Date'}
            placeholderTextColor="white"
            fontFamily="Public Sans"
            color="white"
            // options={{format: 'DD-MM-YYYY'}}
            // inlineImageLeft="calendar"
          />
          <Icon
            name="calendar-o"
            size={20}
            style={{
              color: 'white',
              alignSelf: 'center',
              paddingLeft: 15,
              paddingRight: 15,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <CircularBar />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#000E28',
  },
  input: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 6,
    padding: 10,
  },
  date: {
    borderColor: '#637381',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 7,
    margin: 7,
    paddingLeft: 10,
    flexDirection: 'row',
  },
});

export default DashBoard;
