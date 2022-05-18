import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Menu = () => {
  return (
    <View style={styles.navbar}>
      <View style={{}}>
        <TouchableOpacity style={{borderRadius: 7}}>
          <ImageBackground
            source={require('../images/Vector.png')}
            style={{height: 25, width: 25}}></ImageBackground>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{}}>
        <Icon
          name="calculator"
          size={30}
          style={{
            color: 'white',
          }}></Icon>
      </TouchableOpacity>

      <TouchableOpacity style={{}}>
        <Icon
          name="qrcode-scan"
          size={30}
          style={{
            color: 'white',
          }}></Icon>
      </TouchableOpacity>

      <TouchableOpacity style={{}}>
        <Icon
          name="tag"
          size={30}
          style={{
            color: 'white',
          }}></Icon>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius: 0}}>
        <Image
          source={require('../images/Vector1.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 75,
    flexDirection: 'row',
    // paddingTop: 25,
    justifyContent: 'space-between',
    marginHorizontal: 20,
    // alignSelf: 'center',
  },
});
export default Menu;
