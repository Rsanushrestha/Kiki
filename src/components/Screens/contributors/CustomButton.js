import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const CustomButton = ({arr, onPress}) => {
  // console.log('Color: ', arr);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 25,
            borderColor: arr.color,
            borderWidth: 1,
            // width: 150,
            backgroundColor: arr.backgroundColor,
            height: 45,
          }}>
          <Image style={styles.img} source={arr.image} />
          <Text style={styles.buttonText}>{arr.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignContent: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // width: '40%',
    margin: 5,
  },
  img: {
    marginHorizontal: 5,
    left: 3,
    top: 7,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 1,
    // width: 150,
    backgroundColor: '#FC0D1B3D',
    height: 45,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    padding: 8,
    marginHorizontal: 5,
    top: 3,
  },
});

export default CustomButton;
