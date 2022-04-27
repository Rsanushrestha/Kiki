import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  onChangeNumber,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CodeScreen = props => {
  const {navigation} = props;

  const pin1Ref = useRef();
  const pin2Ref = useRef();
  const pin3Ref = useRef();
  const pin4Ref = useRef();

  // const [pin1, setpin1] = useState('');
  // const [pin2, setpin2] = useState('');
  // const [pin3, setpin3] = useState('');
  // const [pin4, setpin4] = useState('');
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Icons
          name="arrow-back"
          size={30}
          style={{
            color: 'white',
            padding: 20,
          }}></Icons>
      </TouchableOpacity>
      <Text style={styles.login}>Enter code</Text>
      <Text style={styles.txt}>
        Enter the OTP code sent to{'\n'}
        <Text style={{color: '#00AB55', left: 15}}>johandoe@gmail.com</Text>
      </Text>
      <View
        style={{
          // flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin1Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            // onChange={pin1 => {
            //   setpin1(pin1);
            //   if (pin1 != '') {
            //     pin2Ref.current.focus();
            //   }
            // }}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && pin2Ref.current.focus();
            }}
            style={styles.TextInputText}
          />
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin2Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            // onChange={pin2 => {
            //   setpin2(pin2);
            //   if (pin2 != '') {
            //     pin3Ref.current.focus();
            //   }
            // }}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text ? pin3Ref.current.focus() : pin1Ref.current.focus();
            }}
            style={styles.TextInputText}
          />
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin3Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            // onChange={pin3 => {
            //   setpin3(pin3);
            //   if (pin3 != '') {
            //     pin4Ref.current.focus();
            //   }
            // }}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text ? pin4Ref.current.focus() : pin2Ref.current.focus();
            }}
            style={styles.TextInputText}
          />
        </View>
        <View style={styles.TextInputView}>
          <TextInput
            ref={pin4Ref}
            keyboardType={'number-pad'}
            maxLength={1}
            // onChange={pin4 => {
            //   setpin4(pin4);
            //   if (pin4 === '') {
            //     pin3Ref.current.focus();
            //   }
            // }}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && pin3Ref.current.focus();
            }}
            style={styles.TextInputText}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Change')}
        style={styles.signupbtn}>
        <Text style={styles.signuptxt}>Continue</Text>
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
  TextInputView: {
    // borderBottomWidth: 1,
    width: 60,
    borderColor: '#00AB55',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputText: {
    fontSize: 25,
    width: 70,
    textAlign: 'center',
    marginHorizontal: 10,
    color: 'white',
    borderColor: '#637381',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderRadius: 6,
  },

  login: {
    fontSize: 30,
    fontFamily: 'Prompt',
    fontWeight: 'bold',
    color: 'white',
    left: 15,
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
    top: 50,
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
    marginHorizontal: 5,
    borderRadius: 2,
    margin: 5,
  },
});
export default CodeScreen;
