import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Icons = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name="notifications"
        size={20}
        style={{
          color: 'white',
          alignSelf: 'center',
          //   paddingLeft: 15,
          //   paddingRight: 15,
        }}
      />
      <Icon
        name="menu"
        size={27}
        style={{
          color: 'white',
          alignSelf: 'center',
          paddingLeft: 15,
          //   paddingRight: 15,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default Icons;
